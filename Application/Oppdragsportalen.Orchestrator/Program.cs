var builder = DistributedApplication.CreateBuilder(args);

var apiService = builder.AddProject<Projects.Oppdragsportalen_Api>("apiservice");

builder.AddProject<Projects.Oppdragsportalen_App>("webfrontend")
    .WithExternalHttpEndpoints()
    .WithReference(apiService)
    .WaitFor(apiService);

builder.Build().Run();
