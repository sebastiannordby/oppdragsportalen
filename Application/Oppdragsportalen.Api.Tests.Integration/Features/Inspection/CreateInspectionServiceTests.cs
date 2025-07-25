using Bogus;
using Oppdragsportalen.Api.Features.InspectionFeature.UseCases.Create;

namespace Oppdragsportalen.Api.Tests.Integration.Features.Inspection
{
    [Collection(WebApplicationFactoryCollection.CollectionName)]
    public class CreateInspectionServiceTests
    {
        private readonly WebApplicationFactoryFixture _fixture;
        private readonly Faker _faker = new();

        public CreateInspectionServiceTests(WebApplicationFactoryFixture fixture)
        {
            _fixture = fixture;
        }

        [Fact]
        public async Task Test()
        {
            var scope = _fixture.Factory.Services.CreateScope();
            var sut = scope.ServiceProvider.GetRequiredService<CreateInspectionService>();

            await sut.HandleAsync(new()
            {
                Title = _faker.Random.AlphaNumeric(10)
            });

            Assert.True(false);
        }
    }
}
