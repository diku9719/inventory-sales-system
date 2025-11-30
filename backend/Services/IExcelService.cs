namespace InventorySystem.Services
{
    public interface IExcelService
    {
        Task<byte[]> GenerateSalesReportAsync(DateTime startDate, DateTime endDate);
        Task<byte[]> GenerateInventoryReportAsync();
    }
}
