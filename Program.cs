using api.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDBContext> (options => {  //That's where we specify whcih database we use. In this case we use sqlserver and we have added the necessary addons.
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")); //This will look into our appsettings.json
    }); //Always before var app = builder.Build();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
 
app.UseAuthorization();

app.MapControllers();

app.Run();
