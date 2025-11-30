using InventorySystem.Models;

namespace InventorySystem.Services
{
    public interface ISalesService
    {
        Task<IEnumerable<Sale>> GetAllSalesAsync();
        Task<Sale?> GetSaleByIdAsync(int id);
        Task<IEnumerable<Sale>> GetSalesByDateRangeAsync(DateTime startDate, DateTime endDate);
        Task<Sale> CreateSaleAsync(Sale sale);
        Task DeleteSaleAsync(int id);
    }
}
