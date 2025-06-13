using bookshopApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System;


namespace bookshopApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController : ControllerBase
    {
        [HttpPost]
        public ActionResult SaveInventoryData(InventoryRequestDto requestDto)
        {
            using SqlConnection connection = new SqlConnection
            {
                ConnectionString =
                "Server=DESKTOP-9II2MI0\\SQLEXPRESS01;Database=bookShop;Trusted_Connection=True;Encrypt=False"
            };
            SqlCommand command = new SqlCommand
            {
                CommandText = "sp_SaveInventoryData",
                CommandType = System.Data.CommandType.StoredProcedure,
                Connection = connection
            };
            command.Parameters.AddWithValue("@ProductId", requestDto.ProductId);
            command.Parameters.AddWithValue("@ProductName", requestDto.ProductName);
            command.Parameters.AddWithValue("@ProductQuantity", requestDto.ProductQuantity);
            command.Parameters.AddWithValue("@RecordPoints", requestDto.RecordPoints);

            connection.Open();
            command.ExecuteNonQuery();
            connection.Close();
            return Ok();
        }
    }
}
