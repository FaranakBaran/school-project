namespace api.Controllers;

public class MonthRepository : BaseApiController
{
    private readonly IMonthRepository _monthRepository;

    public MonthController(IMonthRepository monthRepository)
    {
        _monthRepository = monthRepository;

        //token Service
    }

    [HttpPost("save")]
    public async Task<ActionResult<MonthDto>> Register(RegisterDto monthInput, CancellationToken cancellationToken)
    {
        if (monthDto is null)
            return BadRequest("This month has already arrived.")

        return monthDto;
    }

    [HttpGet("get-all-month")]
    public async Task<ActionReasult<IEnumerable<MonthDto>>> GetAll(CancellationToken cancellationToken)
    {
        List<MonthDto> monthDtos = await _monthRepository.GetAllAsync(cancellationToken);

        if (!monthDtos.Any())
            return NoContent();

        return monthsDtos;
    }
}
