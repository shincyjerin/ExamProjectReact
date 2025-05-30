using Exa_project.Model;
using Microsoft.EntityFrameworkCore;

namespace Exa_project.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<AdminRegistration> adminRegistrations { get; set; }

        public DbSet<Author> Authors { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<UserRegistration> userRegistrations { get; set; }
    }
}
