using System.ComponentModel.DataAnnotations;

namespace Exa_project.Model
{
    public class Author
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }

        public string? Bio { get; set; }
        public ICollection<Book> Books { get; set; }

    }
}
