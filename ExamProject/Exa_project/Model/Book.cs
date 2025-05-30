using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Exa_project.Model
{
    public class Book
    {
        [Key]
        public int id { get; set; }
        public string Title { get; set; }

        public string? descr { get; set; }
        public int publicYear { get; set; }

        [ForeignKey("Author")]
        public int AuthorId { get; set; }

        // Navigation Property
        public Author Author { get; set; }


        [ForeignKey("Category")]
        public int CatId { get; set; }

        public Category Category { get; set; }

    }
}
