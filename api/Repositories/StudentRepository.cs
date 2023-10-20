namespace api.Repositories;

public class StudentRepository : IStudentRepository
{
    IMongoCollection<Student>? _collection;

    public StudentRepository(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<Student>("students");

        //tokenService = tokenService;
    }

    public async Task<List<StudentDto>> GetAllAsync(CancellationToken cancellationToken)
    {
        List<Student> students = await _collection.Find<Student>(new BsonDocument()).ToListAsync(cancellationToken);

        List<StudentDto> studentDtos = new List<StudentDto>();

        if (students.Any())
        {
            foreach (Student student in students)
            {
                StudentDto studentDto = new StudentDto(
                    Id: student.Id!,
                    NationalCode: student.NationalCode
                );

                studentDtos.Add(studentDto);
            }

            return studentDtos;
        }        
    }

    public async Task<StudentDto?> CreateAsync(RegisterDto studentInput, CancellationToken cancellationToken)
    {
        bool doesAccountExist = await _collection.Find<Student>(
            stu => stu.NationalCode == studentInput.NationalCode.ToLower().Trim()).AnyAsync(cancellationToken);

        if (doesAccountExist)
            return null;

        //if user does not exist, create a new Sudent.
        Student student = new Student(
            Id: null,
            NationalCode: studentIn.NationalCode.Trim(),
            FirstName: studentIn.FirstName.Trim().ToLower(),
            LastName: studentIn.LastName.Trim().ToLower(),
            Age: studentIn.Age,
            PassWord: studentIn.PassWord,
            Payetahsili: studentIn.Payetahsili.Trim().ToLower(),
            NamePedar: studentIn.NamePedar.Trim().ToLower()
        );

        if (_collection is not null)
            await _collection.InsertOneAsync(student, null, cancellationToken);

        if (student.Id is not null)
        {
            StudentDto studentDto = new StudentDto(
                Id: student.Id,
                NationalCode: student.NationalCode
            );

            return studentDto;
        }

        return null;
    }

    public async Task<StudentDto?> LoginAsync(LoginDto studentInput, CancellationToken cancellationToken)
    {
        Student student = await _collection.Find<Student>(
            stu => stu.NationalCode == studentInput.NationalCode.ToLower().Trim()
            && stu.PassWord == studentInput.PassWord)FirstOrDefaultAsync(cancellationToken);

        if (student is null)
            return null;

        if (student.Id is not null)
        {
            StudentDto studentDto = new StudentDto(
                Id: student.Id,
                NationalCode: student.NationalCode
            );

            return studentDto;
        }

        return null;
    }
}







