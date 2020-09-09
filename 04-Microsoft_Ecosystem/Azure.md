# Microsoft Azure Services

## NuGet

It has two "flavours": 
1) **Published in a Public Feed (NuGet.org)**
2) **Published in a Private/Internal Feed**
   * Custom internal package feed stored in various [NuGet Hosting Products](https://docs.microsoft.com/en-us/nuget/hosting-packages/overview) like AzureArtifacts and GitHub Package Registry
   * You can include both custom and public packages that can be shared across your team to prevent conflicts (i.e. agree with team which versions to use etc.)

### Setting Up a Private/Internal Feed Using Azure DevOps

* **Create a Project for an Internal Feed**

    //TODO

* **Create a CI Pipeline to Create and Publish the NuGet Package into you Internal Feed**
    * The project must be added into the Azure Repo so you can run the pipeline against it
    ```yml
    # ASP.NET Core (.NET Framework)
    # Build and test ASP.NET Core projects targeting the full .NET Framework.
    # Add steps that publish symbols, save build artifacts, and more:
    # https://docs.microsoft.com/azure/devops/pipelines/languages/dotnet-core

        
    # the build will trigger on any changes to the master branch
    trigger:
    - master

    # the build will run on a Microsoft hosted agent, using the lastest Windows VM Image
    pool:
    vmImage: 'windows-latest'

    # these variables are available throughout the build file
    # just the build configuration is defined, in this case we are building Release packages
    variables:
    buildConfiguration: 'Release'
    packageFeedName: '[PACKAGE_FEED_NAME]'
    teamProjectName: '[TEAM_PROJECT_NAME]'

    # The build has 3 separate tasks run under 1 step
    steps:

    # The first task is the dotnet command build, pointing to our csproj file
    - task: DotNetCoreCLI@2
    displayName: 'dotnet build'
    inputs:
        command: 'build'
        arguments: '--configuration $(buildConfiguration)'
        projects: '**/*.csproj'

    # The second task is dotnet pack command again pointing to the csproj file
    # The nobuild means the project will not be compiled before running pack, because its already built in above step
    - task: DotNetCoreCLI@2
    displayName: "dotnet pack"
    inputs:
        command: 'pack'
        arguments: '--configuration $(buildConfiguration)'
        packagesToPack: '**/*.csproj'
        nobuild: true
        versioningScheme: 'off'

    - task: NuGetAuthenticate@0
    displayName: 'NuGet Authenticate'

    # The last task is a nuget command, nuget push
    # allowPackageConflicts allows us to build the same version and not throw an error when trying to push
    # instead it just ingores the latest package unless the version changes
    - task: NuGetCommand@2
    displayName: 'nuget push'
    inputs:
        command: 'push'
        packagesToPush: '$(Build.ArtifactStagingDirectory)/**/*.nupkg;!$(Build.ArtifactStagingDirectory)/**/*.symbols.nupkg'
        nuGetFeedType: 'internal'
        publishVstsFeed: '$(teamProjectName)/$(packageFeedName)'
        versioningScheme: 'off' 

    ```

### Setting Up a Private/Internal Feed Using GitHub Package

//TODO

## Emulators

<p>It is possible to run some services locally using emulators. The following lists all the services that can run on the emulator.<p>


### Function App

* Using Visual Studio 2019, Create a new Project
* Select the Azure Functions Template and it would create a project for you and its structure
* Click on Run (button at the top with Green triangle and the name of your Function App)
* And it should run everything for you. It will display the URL where you can access the function from your local browser
