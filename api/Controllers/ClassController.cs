namespace api.Controllers;

public class ClassRepository : BaseApiController
{
    private readonly IClassRepository _calssRepository;

    public ClassController(IClassRepository classRepository)
    {
        _calssRepository = monthRepository;
    }

    [HttpPost("save")]

    public async Task<ActionResult<ClassDto>> Register(RegisterDto classInput)
    {
        if (classsDto is null)
            return BadRequest("This class has already arrived.")

        return classDto;
    }

    [HttpGet("get-all-class")]
    public async Task<ActionReasult<IEnumerable<ClassDto>>> GetAll(CancellationToken cancellationToken)
    {
        List<ClassDto> calssDto = await _calssRepository.GetAllAsync(cancellationToken);

        if (!calssDtos.Any())
            return NoContant();

        return calssDtos;
    }
}
