using Microsoft.EntityFrameworkCore;
using InventorySystem.Data;
using InventorySystem.Models;

namespace InventorySystem.Services
{
    public class AuthService : IAuthService
    {
        private readonly AppDbContext _context;

        public AuthService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<User?> AuthenticateAsync(string username, string password)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Username == username && u.IsActive);

            if (user == null) return null;

            // TODO: Implement proper password hashing verification (BCrypt)
            if (user.PasswordHash != HashPassword(password))
                return null;

            return user;
        }

        public async Task<User> RegisterAsync(User user, string password)
        {
            user.PasswordHash = HashPassword(password);
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        private string HashPassword(string password)
        {
            // TODO: Implement proper password hashing (BCrypt)
            // This is a placeholder - use BCrypt.Net-Next NuGet package
            return password; // INSECURE - Replace with BCrypt
        }
    }
}
