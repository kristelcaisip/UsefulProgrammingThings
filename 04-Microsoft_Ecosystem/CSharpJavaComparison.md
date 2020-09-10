# C#/.Net and Java Comparison

## Java VS .NET Terms

| Java | C# |
|------|----|
| Interface | Contract, Abstract |
| Class | Concrete |
| Package | Namespace | 

## Java VS .NET Tools and Frameworks

| Purpose | Java | C# |
|---------|------|----|
| Dynamic Webpages | JSP | ASP.NET |
| Package Repos | Maven Repo | NuGet |
| Dependencies | pom.xml | Dependencies Tab |
| Dependency Injection | Spring | Unity DI (Windows), Autofac |
| Object Mapping | Spring | Automapper |
| Code Analysis | 3rd party (e.g. Sonarqube, Sonarlint) | stylecop.json, ca.ruleset <br/>as well as 3rd parties |

## .NET

<p> Has 2 "flavours": <p>

1. **.NET Framework**
    * Only for Window OS
    * Heavy; inheritance from System.Net
    * Tightly bound IAS

2. **.NET Core**
    * Modular
    * Lightweight
    * Not tightly bound to IAS
    * Modern; what is currently used
        * C# - runs on top of .NET
        * ASP.NET, MVC

3. **ASP (Active Server Page)**
    * **ASP.NET** - supports various programming models
        * **ASP.NET Web Forms**
            * Modular pages out of components
            * UI Events being processed on server-side
        * **ASP.NET MVC**
            * Using Model-View-Controller design pattern
        * **ASP.NET Web Pages**
        * **ASP.NET Web API**
        * **ASP.NET WebHooks**
        * **SignalR**
        * **Single Page Web App**
            * Dynamically rewrites current web page
            * Goal: LAF of native app
