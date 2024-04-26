using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class ApplicationDBContext : DbContext 
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions)
        : base(dbContextOptions) //That's how we can pass the data in the inherited DbContext
        {
            
        }

        public DbSet<Stock> Stocks {get; set;} //Manipulating the whole entire table
        public DbSet<Comment> Comments {get; set;}
    }
}