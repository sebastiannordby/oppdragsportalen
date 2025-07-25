using Oppdragsportalen.Api.Features.InspectionFeature.Models;

namespace Oppdragsportalen.Api.Features.InspectionFeature
{
    public interface IInspectionRepository
    {
        Task SaveAsync(
            Inspection inspection,
            CancellationToken cancellationToken = default);
    }
}
