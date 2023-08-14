using api.Models;
using api.Settings;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MongoDB.Bson;

namespace api.Controllers;

[ApiController]
[Route("[controller]")]
public class ClassController : ControllerBase
{
    private readonly IMongoCollection<Class> _collection;

    public MonthController(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<Student>("classes");
    }

    [HttpPost("save")]

    public ActionResult<Class> Create(Class classIn)
    {
        Class schoolClass = new Class(
            Id: null,
            schoolClass: classIn.schoolClass.Trim()
        );

        _collection.InsertOne(schoolClass);

        return schoolClass;
    }

    [HttpGet("get-all-class")]
    public ActionReasult<IEnumerable<Class>> GetAll()
    {
        List<Class> classes = _collection.Find<Class>(new BsonDocument()).ToList();

        if (!classes.Any())
            return NoContent();

        return classes;
    }
}


