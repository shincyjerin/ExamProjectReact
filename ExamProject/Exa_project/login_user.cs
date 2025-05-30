using System.ComponentModel.DataAnnotations;

namespace cake_shop
{
    public class login_user
    {
        
            public string username { get; set; }
            public string userpassword { get; set; }
        
    }




    //public class OrderDetail
    //{
    //    public int OrderId { get; set; } // Primary Key (Optional if auto-generated)
    //    public int ProductId { get; set; }
    //    public decimal Quantity { get; set; }
    //    public string Message { get; set; }
    //    public string Address { get; set; }
    //   // public int userid { get; set; }
    //    public DateTime DeliveryDate { get; set; }
    //    public double TotalAmount { get; set; }
    //}
    public class Ad_Registration
    {

        public string username { get; set; }

        public string userpassword { get; set; }

    }
    public class addauthor
    {

        public string name { get; set; }
        public string bio { get; set; }
       
    }




}
