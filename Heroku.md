# Useful Heroku Deployment

## Deploying a Spring Boot Application
* Coming from this [Tutorial](https://www.youtube.com/watch?v=KDK5xXPJVIg)
* **Pre-requisites:**
    * Install Heroku CLI
    * Working Spring Boot Application with all the required dependencies 
* **Steps:**
    * Create a directory for your project (preferably the same name as the app)
    * Add your Spring Boot Project in there 
    * Create a new application on Heroku, which will then assign an external URL (https://[NAME_OF_APPLICATION].herokuapp.com) and also create a Git repository (https://git.heroku.com/[NAME_OF_APPLICATION].git)
    
        ```bash
        $ heroku create [NAME_OF_APPLICATION] 
        $ heroku apps:rename --app [CURRENT_APP_NAME] [NEW_APP_NAME]
        ```
    * Everytime you commit and push to the given Git repository in Heroku, it will automatically re-deploy it. Navigate to the recently created directory with the Spring Boot project, and turn this into a Git repository and assigning the remote location to the Heroku Git repository

        ```bash
        $ git init 
        $ git add . 
        $ git commit -m "[ADD_SOME_MESSAGE_HERE]"
        $ git remote add heroku [https://git.heroku.com/[NAME_OF_APPLICATION].git]
        $ git push heroku master 
        ```
    * Heroku will build the application using Maven (it automatically detects it)