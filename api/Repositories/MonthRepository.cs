namespace api.Repositories;

public class MonthRepository : IMonthRepository
{
    IMongoCollection<Month>? _collection;

    public MonthRepository(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<Month>("months");

        //tokenService = tokenService;
    }

    public async Task<List<MonthDto>> GetAllAsync(CancellationToken cancellationToken)
    {
        List<Month> months = await _collection.Find<Month>(new BsonDocument()).ToListAsync(cancellationToken);

        List<MonthDto> monthDtos = new List<MonthDto>();

        if (months.Any())
        {
            foreach (Month month in months)
            {
                MonthDto monthDto = new MonthDto(
                    Id: null,
                    academicMonths: month.academicMonths.Trim().ToLower()
                );

                monthDtos.Add(monthDto);
            }

            return monthDtos;
        }
    }

    public async Task<MonthDto?> CreateAsync(RegisterDto monthInput, CancellationToken cancellationToken)
    {
        //bool doesAccountExist = await _collection.Find<Month>(
        //month => month.academicMonths == monthInput.academicMonths.ToLower().Trim()).AnyAsync(cancellationToken);

        //if (doesAccountExist)
        //  return null;

        //Month month = new Month(
        //  Id: null,
        //AcademicMonths:
        //)
    }