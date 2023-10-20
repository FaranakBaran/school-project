namespace api.Controllers;

public class StaffController : BaseApiController
{
    private readonly IStaffRepository _staffRepository;

    public StaffController(IStaffRepository staffRepository)
    {
       _staffRepository = staffRepository;
    }

    [HttpPost("register")]
    public async Task<ActionResult<StaffDto>> Register(Register staffInput, CancellationToken cancellationToken)
    {
        if (staffDto is null)
            return BadRequest("Personal Code is taken.")

        return studentDto;
    }

    [HttpPost("login")]
    public async Task<ActionResult<StaffDto>> Login(LoginDto staffInput, CancellationToken cancellationToken)
    {
        StaffDto? staffDto = await _staffRepository.LoginAsync(staffInput, cancellationToken);

        if (staffDto is null)
            return Unauthorized("Wrong Personal Code or Password.")

        return staffDto;
    }

    [HttpGet("get-all-staffs")]
    public async Task<ActionResult<IEnumerable<StaffDto>>> GetAll(CancellationToken cancellationToken)
    {
        List<StaffDto> staffDtos = await _staffRepository.GetAllAsync(cancellationToken);

        if (!staffDtos.Any())
            return NoContent();

        return staffDtos;
    }

    [HttpGet("get-by-personalCode")]
    public async Task<ActionResult<Staff>> GetStaffsByPersonalCode(string staffPersonalCode, CancellationToken cancellationToken)
    {
        Staff staff = await _collection.Find<Staff>(staff => staff.PersonnelCode == staffPersonalCode).FirstOrDefaultAsync(cancellationToken);

        if (staff is null)
            return NotFound("No user was found");

        return staffs;
    }

    [HttpPut("update/{personalCode}")]
    public async Task<ActionResult<UpdateResult>> UpdateStaffByPersonalCode(string staffPersonalCode, CancellationToken cancellationToken)
    {
        //var UpdateStaff = Builders<Staff>.Update
        //.Set(doc => doc.PassWord, staffIn.PassWord)
        //.Set(doc => doc.Education, staffIn.Education);

        //return _collection.UpdateOne<Staff>(doc => doc.PersonnelCode == personalCode, UpdateStaff);
    }

    [HttpDelete("delete/{personalCode}")]
    public async Task<ActionResult<DeleteResult>> Delete(string personalCode, CancellationToken cancellationToken)
    {
       // return _collection.DeleteOne<Staff>(doc => doc.PersonnelCode == personalCode);
    }
}
