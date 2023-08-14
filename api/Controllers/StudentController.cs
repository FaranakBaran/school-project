using api.Models;
using api.Settings;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MongoDB.Bson;

namespace api.Controllers;

[ApiController]
[Route("[controller]")]
public class StudentController : ControllerBase
{
    private readonly IMongoCollection<Student> _collection;

    public StudentController(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<Student>("students");
    }

    [HttpPost("register")]
    public ActionResult<Student> Create(Student studentIn)
    {
        Student student = new Student(
            Id: null,
            NationalCode: studentIn.NationalCode.Trim(),
            FirstName: studentIn.FirstName.Trim(),
            LastName: studentIn.LastName.Trim(),
            Age: studentIn.Age,
            PassWord: studentIn.PassWord,
            Payetahsili: studentIn.Payetahsili.Trim(),
            NamePedar: studentIn.NamePedar.Trim()
        );

        _collection.InsertOne(student);

        return student;
    }

    [HttpPost("login")]
    public ActionResult<Student> Login(Student studentIn)
    {
        Student Student = _collection.Find<Student>(doc => doc.NationalCode == studentIn.NationalCode && doc.PassWord == studentIn.PassWord).FirstOrDefault();

        if (Student is null)
            return BadRequest("This user does not exist.");

        return Student;
    }

    [HttpGet("get-all-students")]
    public ActionResult<IEnumerable<Student>> GetAll()
    {
        List<Student> students = _collection.Find<Student>(new BsonDocument()).ToList();

        if (!students.Any())
            return NoContent();

        return students;
    }

    [HttpGet("get-student-by-nationalCode")]
    public ActionResult<IEnumerable<Student>> GetStudents(string nationalCode)
    {
        List<Student> students = _collection.Find(Student => Student.NationalCode == nationalCode).ToList();

        if (!students.Any())
            return NoContent();

        return students;
    }

    [HttpPut("update/{nationalCode}")]
    public ActionResult<UpdateResult> UpdateStudentByNationalCod(string nationalCode, Student studentIn)
    {
        var UpdateStudent = Builders<Student>.Update
        .Set(doc => doc.PassWord, studentIn.PassWord)
        .Set(doc => doc.Payetahsili, studentIn.Payetahsili);

        return _collection.UpdateOne<Student>(doc => doc.NationalCode == nationalCode, UpdateStudent);
    }

    [HttpDelete("delete/{nationalCode}")]
    public ActionResult<DeleteResult> Delete(string nationalCode)
    {
        return _collection.DeleteOne<Student>(doc => doc.NationalCode == nationalCode);
    }
}
