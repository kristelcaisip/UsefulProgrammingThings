# Useful Set-up Things - for Mac

## Set Up Env Variable Permanently
* Add an `export` script in the appropriate file: 
  * **/etc/profile** - For system-wide operations
  * **~/.bash_profile** - For user based operations
  * **~/.bashrc** - For non-login interactive shells
* Example: 
  ```bash
  # Open a file using some text editor
  $ vim ~/.bash_profile
  
  # Press "i" to enter insert mode and add the following information in the file 
  export NAME_OF_VARIBLE="VALUE_OF_VARIABLE"
  
  # Do an Esc and type in !wq to leave the editor and save the file
  
  # To test if this was set properly 
  echo $NAME_OF_VARIABLE
  ```

## Install Maven 
* Download Maven from the official website (https://maven.apache.org/download.cgi) use the `apache-maven-3.6.3-bin.tar.gz`
* Extract the .tar.gz file and remove the .tar.gz file from your system 
  ```bash
  $ rm Downloads/apache-maven*bin.tar.gz
  ```

* Fix the permissions 
  ```bash
  $ chown -R root:wheel Downloads/apache-maven*
  ```

* Move the contents to the appropriate location and exit the session
  ```
  $ mv Downloads/apache-maven* /usr/local/opt/apache-maven
  $ exit
  ```

* Open the bash_profile 
  ```bash
  $ vim ~/.bash_profile
  ```

* Add the Maven binaries to the path and append
  ```bash
  $ export PATH=$PATH:/opt/apache-maven/bin
  ```

  ## Install multiple Java Versions
  * https://medium.com/@brunofrascino/working-with-multiple-java-versions-in-macos-9a9c4f15615a