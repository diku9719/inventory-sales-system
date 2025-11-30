using Microsoft.EntityFrameworkCore;
using InventorySystem.Data;
using InventorySystem.Models;

namespace InventorySystem.Services
{
    public class SalesService : ISalesService
    {
        private readonly AppDbContext _context;

        public SalesService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Sale>> GetAllSalesAsync()
        {
            return await _context.Sales
                .Include(s => s.Product)
                .OrderByDescending(s => s.SaleDate)
                .ToListAsync();
        }

        public async Task<Sale?> GetSaleByIdAsync(int id)
        {
            return await _context.Sales
                .Include(s => s.Product)
                .FirstOrDefaultAsync(s => s.Id == id);
        }

        public async Task<IEnumerable<Sale>> GetSalesByDateRangeAsync(DateTime startDate, DateTime endDate)
        {
            return await _context.Sales
                .Include(s => s.Product)
                .Where(s => s.SaleDate >= startDate && s.SaleDate <= endDate)
                .OrderByDescending(s => s.SaleDate)
                .ToListAsync();
        }

        public async Task<Sale> CreateSaleAsync(Sale sale)
        {
            // Calculate total amount
            sale.TotalAmount = sale.Quantity * sale.UnitPrice;

            // Update product stock
            var product = await _context.Products.FindAsync(sale.ProductId);
            if (product != null)
            {
                product.StockQuantity -= sale.Quantity;
                product.UpdatedAt = DateTime.UtcNow;
            }

            _context.Sales.Add(sale);
            await _context.SaveChangesAsync();
            return sale;
        }

        public async Task DeleteSaleAsync(int id)
        {
            var sale = await _context.Sales.FindAsync(id);
            if (sale != null)
            {
                _context.Sales.Remove(sale);
                await _context.SaveChangesAsync();
            }
        }
    }
}
