using api.Models;
using api.Settings;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace api.Controllers;

public class AdminController : BaseApiController
{
    private readonly IMongoCollection<Admin> _collection;
    public AdminController(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<Admin>("admins");
    }

    [HttpPost("register")]
    public ActionResult<Admin> Create(Admin adminIn)
    {
        Admin admin = new Admin(
            Id: null,
            Email: adminIn.Email,
            Password: adminIn.Password,
            ConfirmPassword: adminIn.ConfirmPassword
        );

        _collection.InsertOne(admin);

        return admin;
    }

    [HttpPost("login")]
    public ActionResult<Admin> Login(Admin adminIn)
    {
        Admin admin = _collection.Find<Admin>(doc => doc.Email == adminIn.Email && doc.Password == adminIn.Password && doc.ConfirmPassword == adminIn.ConfirmPassword).FirstOrDefault();

        if (admin is null)
            return BadRequest("Wrong email or password");

        return admin;
    }
}
