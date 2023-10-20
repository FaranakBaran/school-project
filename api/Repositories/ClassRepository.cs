namespace api.Repositories;

public class ClassRepository : IClassRepository
{
    IMongoCollection<Class>? _collection;

    public StudentRepository(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<Class>("classes");

        //tokenService = tokenService;
    }

    public async Task<List<ClassDto>> GetAllAsync(CancellationToken cancellationToken)
    {
        List<Class> classes = await _collection.Find<Class>(new BsonDocument()).ToListAsync(cancellationToken);

        List<ClassDto> classDtos = new List<ClassDto>();

        if (classes.Any())
        {
            foreach (Class class in classes)
            {
                ClassDto classDto = new ClassDto(
                    Id: class.Id!,
                    SchoolClasses: class.SchoolClasses.Trim().ToLower()
                );

                classDtos.Add(classDto);
            }

            return classDtos;
        }
    }

    public async Task<ClassDto?> CreateAsync(RegisterDto classInput, CancellationToken cancellationToken)
{ }
}