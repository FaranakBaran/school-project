using api.Models;
using api.Settings;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MongoDB.Bson;

namespace api.Controllers;

[ApiController]
[Route("[controller]")]
public class StaffController : ControllerBase
{
    private readonly IMongoCollection<Staff> _collection;

    public StaffController(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<Staff>("staffs");

    }

    [HttpPost("register")]
    public ActionResult<Staff> Create(Staff staffIn)
    {
        Staff staff = new Staff(
            Id: null,
            NationalCode: staffIn.NationalCode.Trim(),
            FirstName: staffIn.FirstName.Trim(),
            LastName: staffIn.LastName.Trim(),
            Age: staffIn.Age,
            PassWord: staffIn.PassWord,
            PersonnelCode: staffIn.PersonnelCode.Trim(),
            Education: staffIn.Education.Trim(),
            JobTitle: staffIn.JobTitle.Trim()
        );

        _collection.InsertOne(staff);

        return staff;
    }

    [HttpPost("login")]
    public ActionResult<Staff> Login(Staff staffIn)
    {
        Staff Staff = _collection.Find<Staff>(doc => doc.PersonnelCode == staffIn.PersonnelCode && doc.NationalCode == staffIn.NationalCode).FirstOrDefault();

        if (Staff is null)
            return BadRequest("This user does not exist.");

        return Staff;
    }

    [HttpGet("get-all-staffs")]
    public ActionResult<IEnumerable<Staff>> GetAll()
    {
        List<Staff> staffs = _collection.Find<Staff>(new BsonDocument()).ToList();

        if (!staffs.Any())
            return NoContent();

        return staffs;
    }

    [HttpGet("get-by-personalCode")]
    public ActionResult<IEnumerable<Staff>> GetStaffs(string personalCode)
    {
        List<Staff> staffs = _collection.Find(Staff => Staff.PersonnelCode == personalCode).ToList();

        if (!staffs.Any())
            return NoContent();

        return staffs;
    }

    [HttpPut("update/{personalCode}")]
    public ActionResult<UpdateResult> UpdateStaffByPersonalCode(string personalCode, Staff staffIn)
    {
        var UpdateStaff = Builders<Staff>.Update
        .Set(doc => doc.PassWord, staffIn.PassWord)
        .Set(doc => doc.Education, staffIn.Education);

        return _collection.UpdateOne<Staff>(doc => doc.PersonnelCode == personalCode, UpdateStaff);
    }

    [HttpDelete("delete/{personalCode}")]
    public ActionResult<DeleteResult> Delete(string personalCode)
    {
        return _collection.DeleteOne<Staff>(doc => doc.PersonnelCode == personalCode);
    }
}
