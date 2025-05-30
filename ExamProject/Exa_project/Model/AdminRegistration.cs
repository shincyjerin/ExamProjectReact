using System.ComponentModel.DataAnnotations;

namespace Exa_project.Model
{
    public class AdminRegistration
    {
        [Key]
        public int adminid { get; set; }
        public string adminname { get; set; }

        public string email { get; set; }
        public string password { get; set; }
    }
}
