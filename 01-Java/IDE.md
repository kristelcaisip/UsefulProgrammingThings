# Integrated Development Environment

## Eclipse

### Debugging
* Right click on the project and select **Debug As**
* It will ask you to change the perspective. Click on OK
* Use "Step Into" button 
* **Breakpoints** - add this to places where to stop the running of the application
* **Variable** - use the step into
* **Expressions** - the

### Troubleshoot 

#### WARNING The requested profile "pom.xml" could not be activate because it does not exist
* Right click on the project and click on Properties > Maven 
* Remove `pom.xml` on the box and click on Apply and Close 

---

## IntelliJ

### Setting up with GitHub

* Pre-requisites: 
  * Make sure that you have set-up the authentication key pairs using ssh-keygen
  * Added the SSH keys in your GitHub Account
* Setup:
  * Go to IntelliJ Preferences > Version Control > GitHub
  * Tick the *Clone git repositories using ssh*
  * Click on the *+* and select the GitHub option you're going to use
    * Normal GitHub...
      * GitHub will open in your browser asking you to authorise IntelliJ (ensure that you're logged in with the correct username)
    * GitHub Enterprise...
      * Enter the Server Name
      * Click on the *Generate* button and it will open GitHub Enterprise on your browser to get you to generate and save a token
      * Copy and paste the token into IntelliJ
  * On the *Welcome Page* click on the *Get from VCS* button
  * Copy the URL of the GitHub Repository (use the SSH), something like below:
    * `git@[CHANGE_TO_MATCH_SET_IN.SSH/CONFIG]:[CHANGE_TO_USER_NAME]/Repo-I-Want-To-Clone.git`
      * `[CHANGE_TO_MATCH_SET_IN.SSH/CONFIG]` - this will be something like github-someusername
      * `[CHANGE_TO_USER_NAME]` - GitHub username where this repo resides
  * Click on Clone
  * It will ask you for the password you set up when setting up the key pairs using ssh-keygen, type that in
  * It should successfully clone the repository
