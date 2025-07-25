using Microsoft.EntityFrameworkCore;
using Oppdragsportalen.Api.Features.InspectionFeature;
using Oppdragsportalen.Api.Infrastructure.Database;
using Oppdragsportalen.Api.Infrastructure.Repositories;

namespace Oppdragsportalen.Api.Infrastructure
{
    internal static class InfrastructureExtensions
    {
        internal static IServiceCollection AddInfrastructure(
            this IServiceCollection services, string connectionString)
        {
            return services
                .AddDatabase(connectionString)
                .AddRepositories();
        }

        internal static IServiceCollection AddDatabase(
            this IServiceCollection services, string connectionString)
        {
            services.AddDbContext<OppdragDbContext>(options =>
            {
                options.UseSqlServer(connectionString);
                options.UseLoggerFactory(LoggerFactory.Create(builder =>
                {
                    builder.AddConsole();
                }));

            }, ServiceLifetime.Scoped);

            return services;
        }

        private static IServiceCollection AddRepositories(
            this IServiceCollection services)
        {
            return services
                .AddTransient<IInspectionRepository, InspectionRepository>();
        }
    }
}
