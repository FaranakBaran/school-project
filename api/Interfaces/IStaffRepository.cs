namespace api.Interfaces;

public interface IStaffRepository
{
    public Task<List<StaffDto>> GetAllAsync(CancellationToken cancellationToken);
    
    public Task<List<StaffDto>> CreateAsync(RegisterDto staffInput, CancellationToken cancellationToken);

    public Task<List<StaffDto>> LoginAsync(LoginDto staffInput, CancellationToken cancellationToken);
}