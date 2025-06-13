namespace bookshopApi.Models
{
    public class InventoryRequestDto
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int ProductQuantity { get; set; }
        public int RecordPoints { get; set; }
    }
}
