namespace api.Interfaces;

public interface IStudentRepository
{
    public Task<List<StudentDto>> GetAllAsync(CancellationToken cancellationToken);
    
    public Task<List<StudentDto>> CreateAsync(RegisterDto studentInput, CancellationToken cancellationToken);

    public Task<List<studentDto>> LoginAsync(LoginDto studentInput, CancellationToken cancellationToken);
}
