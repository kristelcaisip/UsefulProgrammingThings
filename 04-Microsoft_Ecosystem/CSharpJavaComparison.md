# C# Training (Code)

*This repository contains my C# Training Material and Code. It has the following Projects:*
* **Basics** - *Everything I have learned from the following sources:*
    * [Microsoft's C# 101](https://bit.ly/2DVb5Az)
        * This course pretty much goes through whatever is in this [C# Tutorials Material](https://docs.microsoft.com/en-gb/dotnet/csharp/tutorials/)
            * kcaisip@gmail.com is used to track my training in [Microsoft Documentation](http://docs.microsoft.com/)
    * [C# Yellow Book](http://www.csharpcourse.com/)
    * [FreeCodeCamp Complete Beginners Tutorial](https://www.youtube.com/watch?v=GhQdlIFylQ8)
        * TBA
* **Advanced** - *More Advanced Topics that includes integration with other things and covers the following topics --TBA*
    * OAuth 2.0
    * TDD Approach and Unit Testing
    * Error Handling
    * Microservices
    * Web Applications
    * Messaging and Queueing Services
        * Using [Redis](https://www.youtube.com/watch?v=Hbt56gFj998)
    * Design Patterns
    * Parallel Programming
    * Custom Library Project
    * Templates
* **Notes.md** - *My Notebook that contains all the useful notes I have taken along the way.*

*These are the Versions that I am using:*
* [.NET Core 3.1](https://docs.microsoft.com/en-us/dotnet/?view=netcore-3.1)
* [Visual Studio 2019]()

---

# Cheatsheet

*To quickly learn C#, I've created this list that other people coming from a Java background and have not touched any Microsoft Products (except for your PC, MS Office, and Visual Basic).*

## Java VS C#

### 1. Terms

| Java | C# |
|------|----|
| Interface | Contract, Abstract |
| Class | Concrete |
| Package | Namespace |
| .jar<br/>.war<br/>.ear | Assembly (DDL or EXE) |
| .project | .sln |
| POJO | POCO |
| `final` | `readonly` |
|  `import` | `using` |
| All classes are `public` by default | All classes are `private` by default |

### 2. Tools and Frameworks

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

### 3. Coding Conventions

| Conventions | Java | C# |
|-------------|------|----|
| Methods | Camel Case <br/>`foo.barThis()` | Pascal Case <br/>`foo.BarThis()` |
| Interfaces | None | Prefixed with "I"<br/>`IFooBar<T>`|
| Brackets | None | New Line |
| | | |


## C# VS .NET

*The names and terms have slight nuances and can get very confusing.*

| C#                                             | .NET                                           |
|------------------------------------------------|------------------------------------------------|
| Programming Language                           | Framework for building applications on Windows |
|                                                | Not limited to just C# (e.g. F# and VB.NET)    |
|                                                | Made of 2 Components:<br/> CLR (Common Language Runtime<br/> Class Library) |

### .NET Has 2 "flavours":

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

---

# Visual Studio 2019

## HotKeys

| HotKeys | What it Does |
|---------|--------------|
| **F5** | Run the application (Debug Mode) |
| **Ctrl+F5** | Run the application |
| **Ctrl+Shift+B** | Compile the application |
| **cw + Tab** | `Console.WriteLine();` |
| **Ctrl+Click or Cmd+Click** | Opens the Object Browser |
| **F11** | At Debug, Step Into Code |
| **F10**  | At Debug, Step Over Code |
| **Ctrl+G**  | Jumps a line number |
| **[]**  | [] |

--- 
# Useful Links

* [C# Official Documentation](https://docs.microsoft.com/en-us/dotnet/csharp/)
* [Test Driven Development](https://www.freecodecamp.org/news/tdd-explanation-hands-on-practice-with-c-a0124338be44/)
* [CLR vs JVM](https://blog.overops.com/clr-vs-jvm-how-the-battle-between-net-and-java-extends-to-the-vm-level/#:~:text=Top%20differences%20between%20the%20CLR,JIT%20compiler%20called%20Java%20HotSpot)
* [C# vs Java](https://blog.overops.com/c-vs-java-5-irreplaceable-c-features-wed-kill-to-have-in-java/)
* [Comparisons](https://bit.ly/2FhTjZ0)
