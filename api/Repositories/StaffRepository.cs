namespace api.Repositories;

public class StaffRepository : IStaffRepository
{
    IMongoCollection<Staff>? _collection;

    public StaffRepository(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<Staff>("staffs");

        //tokenService = tokenService;
    }

    public async Task<List<StaffDto>> GetAllAsync(CancellationToken cancellationToken)
    {
        List<Staff> staffs = await _collection.Find<Staff>(new BsonDocument()).ToListAsync(CancellationToken);

        List<StaffDto> staffDtos = new List<StaffDto>();

        if (staffs.Any())
        {
            foreach (Staff staff in staffs)
            {
                StaffDto staffDto = new StaffDto(
                    Id: staff.Id!,
                    PersonnelCode: staff.PersonnelCode
                );

                staffDtos.Add(staffDto);
            }

            return staffDtos;
        }
    }

    public async Task<StaffDto?> CreateAsync(RegisterDto staffInput, CancellationToken cancellationToken)
    {
        bool doesAccountExist = await _collection.Find<Staff>(
            staff => staff.PersonnelCode == staffInput.PersonnelCode.ToLower().Trim()).AnyAsync(cancellationToken);

        if (doesAccountExist)
            return null;

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

        if (_collection is not null)
            await _collection.InsertOneAsync(staff, null, cancellationToken);

        if (staff.Id is not null)
        {
            StaffDto staffDto = new StaffDto(
                Id: staff.id,
                PersonnelCode: staff.PersonnelCode
            );

            return staffDto
        }

        return null;
    }

    public async Task<StaffDto?> LoginAsync(LoginDto staffInput, CancellationToken cancellationToken);
    {
        Staff staff = await _collection.Find<Staff>(
            staff => staff.PersonnelCode == staffInput.PersonnelCode.ToLower().Trim
            && staff.PassWord == staffInput.PassWord)FirstOrDefaultAsync(cancellationToken);

        if (staff is null)
            return null;

        if (staff.Id is not null)
        {
            StaffDto staffDto = new StaffDto(
                Id: staff.Id,
                PersonnelCode: staff.PersonnelCode
            );

            return staffDto;
        }

        return null;
    }
}
