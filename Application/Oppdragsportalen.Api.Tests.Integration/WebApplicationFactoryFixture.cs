using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Oppdragsportalen.Api.Infrastructure;
using Oppdragsportalen.Api.Infrastructure.Database;
using Testcontainers.MsSql;

namespace Oppdragsportalen.Api.Tests.Integration
{
    public class WebApplicationFactoryFixture : IAsyncLifetime
    {
        private WebApplicationFactory<IOppdragsportalenApiAssemblyMarker> _factory = null!;
        private readonly MsSqlContainer _databaseContainer = new MsSqlBuilder().Build();

        public WebApplicationFactory<IOppdragsportalenApiAssemblyMarker> Factory => _factory;

        public async Task DisposeAsync()
        {
            if (_factory is not null)
                await _factory.DisposeAsync();

            if (_databaseContainer is not null)
                await _databaseContainer.DisposeAsync();
        }

        public async Task InitializeAsync()
        {
            await _databaseContainer.StartAsync();
            await InitializeWebApplicationFactory(_databaseContainer.GetConnectionString());
        }

        private async Task InitializeWebApplicationFactory(string dbConnectionString)
        {
            await InitializeDatabaseAsync(dbConnectionString);

            var config = new[]
            {
                new KeyValuePair<string, string?>("Secrets:Database:ConnectionString", dbConnectionString)
            };

            _factory = new WebApplicationFactory<IOppdragsportalenApiAssemblyMarker>()
                .WithWebHostBuilder(builder =>
                {
                    builder.ConfigureAppConfiguration(configBuilder => configBuilder.AddInMemoryCollection(config));
                    builder.ConfigureServices(serviceCollection =>
                    {
                        serviceCollection.RemoveAll(typeof(BackgroundService));
                        serviceCollection.RemoveAll(typeof(IHostedService));
                    });
                });
        }

        private async Task InitializeDatabaseAsync(
            string dbConnectionString)
        {
            var serviceCollection = new ServiceCollection();
            serviceCollection.AddDatabase(dbConnectionString);
            using var serviceProvider = serviceCollection.BuildServiceProvider();
            using var scope = serviceProvider.CreateScope();
            var dbContext = scope.ServiceProvider.GetRequiredService<OppdragDbContext>();

            await dbContext.Database.EnsureCreatedAsync();
        }
    }
}
