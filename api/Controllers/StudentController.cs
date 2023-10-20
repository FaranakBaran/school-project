namespace api.Controllers;

public class StudentController : BaseApiController
{
    private readonly IStudentRepository _studentRepository;

    public StudentController(IStudentRepository studentRepository)
    {
        _studentRepository = studentRepository;

        //token Service
    }
    
    [HttpPost("register")]
    public async Task<ActionResult<StudentDto>> Register(RegisterDto studentInput, CancellationToken cancellationToken)
    {
        if (studentDto is null)
            return BadRequest("National code is taken.")

        return studentDto;
    }

    [HttpPost("login")]
    public async Task<ActionResult<StudentDto>> Login(LoginDto studentIn, CancellationToken cancellationToken)
    {
        StudentDto? studentDto = await _studentRepository.LoginAsync(studentInput, cancellationToken);

        if (studentDto is null)
            return Unauthorized("Wrong National Code or Password.")

        return studentDto;
    }

    [HttpGet("get-all-students")]
    public async Task<ActionResult<IEnumerable<StudentDto>>> GetAll(CancellationToken cancellationToken)
    {
        List<StudentDto> studentDtos = await _studentRepository.GetAllAsync(cancellationToken);

        if (!studentDtos.Any())
            return NoContent();

        return studentDtos;
    }

    [HttpGet("get-student-by-nationalCode")]
    public async Task<ActionResult<Student>> GetStudentsByNationalCode(string studentNtionalCode, CancellationToken cancellationToken)
    {
        Student student = await _collection.Find<Student>(stu => stu.NationalCode == stuNationalCode).FirstOrDefaultAsync(cancellationToken);

        if (student is null)
            return NotFound("No user was found");

        return student;
        //return null;
    }

    [HttpPut("update/{nationalCode}")]
    public  async Task<ActionResult<UpdateResult>> UpdateStudentByNationalCod(string studentNationalCode, CancellationToken cancellationToken)
    {
        //var UpdateStudent = Builders<Student>.Update
        //.Set(doc => doc.PassWord, studentIn.PassWord)
        //.Set(doc => doc.Payetahsili, studentIn.Payetahsili);

        //return _collection.UpdateOne<Student>(doc => doc.NationalCode == nationalCode, UpdateStudent);
    }

    [HttpDelete("delete/{nationalCode}")]
    public  async Task<ActionResult<DeleteResult>> Delete(string nationalCode, CancellationToken cancellationToken)
    {
        //return _collection.DeleteOne<Student>(doc => doc.NationalCode == nationalCode);
    }
}
