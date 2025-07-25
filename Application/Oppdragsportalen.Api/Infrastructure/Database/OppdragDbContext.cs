using Microsoft.EntityFrameworkCore;

namespace Oppdragsportalen.Api.Infrastructure.Database
{
    internal class OppdragDbContext : DbContext
    {
        public OppdragDbContext() : base()
        {

        }

        public OppdragDbContext(DbContextOptions<OppdragDbContext> options) : base(options)
        {

        }
    }
}
