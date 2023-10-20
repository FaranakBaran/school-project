namespace api.Interfaces;

public interface IMonthRepository
{
    public Task<List<MonthDto>> GetAllAsync(CancellationToken cancellationToken);

    //public Task<List<MonthDto>> CreateAsync(RegisterDto monthInput, CancellationToken cancellationToken);
}