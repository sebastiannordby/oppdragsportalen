using Oppdragsportalen.Api.Features.InspectionFeature.UseCases.Create;

namespace Oppdragsportalen.Api.Features.InspectionFeature
{
    internal static class InspectionFeatureExtensions
    {
        internal static IServiceCollection AddInspectionFeature(
            this IServiceCollection services)
        {
            return services
                .AddTransient<CreateInspectionService>();
        }
    }
}
