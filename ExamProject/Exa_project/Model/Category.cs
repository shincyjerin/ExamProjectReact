using System.ComponentModel.DataAnnotations;

namespace Exa_project.Model
{
    public class Category
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }

        public string? Descri { get; set; }
        public ICollection<Book> Books { get; set; }

    }
}
