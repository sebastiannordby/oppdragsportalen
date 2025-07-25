using Oppdragsportalen.Api.Features.InspectionFeature;
using Oppdragsportalen.Api.Features.InspectionFeature.Models;

namespace Oppdragsportalen.Api.Infrastructure.Repositories
{
    internal sealed class InspectionRepository : IInspectionRepository
    {
        public Task SaveAsync(Inspection inspection, CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }
    }
}
