# Useful Programming Things 

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
