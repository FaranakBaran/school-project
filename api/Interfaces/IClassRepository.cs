namespace api.Interfaces;

public interface IClassRepository
{
    public Task<List<ClassDto>> GetAllAsync(CancellationToken cancellationToken);

    //public Task<List<MonthDto>> CreateAsync(RegisterDto monthInput, CancellationToken cancellationToken);
}
