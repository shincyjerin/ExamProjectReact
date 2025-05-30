using cake_shop;
using Exa_project.Data;
using Exa_project.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Exa_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class libraryMana : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public libraryMana(ApplicationDbContext context)
        {
            _context = context;



        }


        [HttpPost("User_login")]

        public async Task<ActionResult<UserRegistration>> Login([FromBody] login_user request)
        {
            // Find user by username and password
            var userlogin = _context.userRegistrations
                .Where(u => u.username == request.username && u.userpassword == request.userpassword)
                .SingleOrDefault();

            if (userlogin == null)
            {
                return Unauthorized(new { message = "Invalid username or password." });
            }

            return Ok(new { message = "Login successful" });
        }


        [HttpPost("admin_login")]

        public async Task<ActionResult<AdminRegistration>> Login([FromBody] Ad_Registration request)
        {
            // Find user by username and password
            var userlogin = _context.adminRegistrations
                .Where(u => u.adminname == request.username && u.password == request.userpassword)
                .SingleOrDefault();

            if (userlogin == null)
            {
                return Unauthorized(new { message = "Invalid username or password." });
            }

            return Ok(new { message = "Login successful" });
        }
        [HttpPost("ADD_Author")]
        public async Task<ActionResult<Author>> Add_product([FromBody] addauthor au)
        {
            

            var cakes = new Author
            {
                name = au.name,
                Bio = au.bio,
                
            };

            _context.Authors.Add(cakes);
            await _context.SaveChangesAsync(); // Use async method

            return Ok(new { message = "Product added successfully!" });
        }

        [HttpGet("view_author")]
        public async Task<ActionResult<IEnumerable<dynamic>>> viewau()
        {

            return _context.Authors.ToList();

            
        }


    }
}
