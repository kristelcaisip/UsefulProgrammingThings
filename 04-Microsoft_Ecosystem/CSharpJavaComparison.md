# Learning C# and .NET Core

## Java VS C#
### Terms

| Java | C# |
|------|----|
| Interface | Contract, Abstract |
| Class | Concrete |
| Package | Namespace |
| .jar<br/>.war<br/>.ear | Assembly (DDL or EXE) |
| .project | .sln |
| POJO | POCO |
| `final` | `readonly` |
| All classes are `public` by default | All classes are `private` by default |

### Tools and Frameworks

| Purpose | Java | C# |
|---------|------|----|
| Dynamic Webpages | JSP | ASP.NET |
| Package Repos | Maven Repo | NuGet |
| Dependencies | pom.xml | Dependencies Tab |
| Dependency Injection | Spring | Unity DI (Windows), Autofac |
| Object Mapping | Spring | Automapper |
| Code Analysis | 3rd party (e.g. Sonarqube, Sonarlint) | stylecop.json, ca.ruleset <br/>as well as 3rd parties |
| Unit Testing | JUnit | Microsoft Test Framework <br/> NUnit |
| Mocking Framework | Mockito | Moq C# |
| Runtime Environment | JVM | CLR (Common Language Runtime) |
| Project | .project | .sln |
| Remove Boilerplate | Lombok Framework <br/> `public String name;` | Built in <br/> `public string Name {get; set}`|
| Application Server | Apache TomCat <br/> JBoss <br/> WebLogic Server (Oracle) | IIS (ASP.NET) |
| | | |

### Coding Conventions

| Conventions | Java | C# |
|-------------|------|----|
| Methods | Camel Case <br/>`foo.barThis()` | Pascal Case <br/>`foo.BarThis()` |
| Interfaces | None | Prefixed with "I"<br/>`IFooBar<T>`|
| Brackets | None | New Line |
| | | |


## .NET

<p> Has 2 "flavours": <p>

1. **.NET Framework**
    * Only for Window OS
    * Heavy; inheritance from System.Net
    * Tightly bound IAS

2. **.NET Core**
    * Develop Cross Platform applications
    * Modular
    * Lightweight
    * Not tightly bound to IAS
    * Modern; what is currently used
        * C# - runs on top of .NET
        * ASP.NET, MVC

### Build Web Apps with .NET
* **ASP (Active Server Page)**
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
