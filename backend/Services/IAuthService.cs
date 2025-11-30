using InventorySystem.Models;

namespace InventorySystem.Services
{
    public interface IAuthService
    {
        Task<User?> AuthenticateAsync(string username, string password);
        Task<User> RegisterAsync(User user, string password);
    }
}
