using api.Models;
using api.Settings;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MongoDB.Bson;

namespace api.Controllers;

[ApiController]
[Route("[controller]")]
public class MonthController : ControllerBase
{
    private readonly IMongoCollection<Month> _collection;

    public MonthController(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<Student>("students");
    }

    [HttpPost("save")]
    public ActionResult<Month> Create(Month monthIn)
    {
        Month month = new Month(
            Id: null,
            academicMonths: monthIn.academicMonths.Trim()
        );

        _collection.InsertOne(month);

        return month;
    }

    [HttpGet("get-all-month")]
    public ActionReasult<IEnumerable<Month>> GetAll()
    {
        List<Month> months = _collection.Find<Month>(new BsonDocument()).ToList();

        if (!months.Any())
            return NoContent();

        return months;
    }
}


