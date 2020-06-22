# Useful Things for Linux 

## Shell Scripting 
### Useful Installations
* Install OpenSSH 
  ```bash
  $ sudo apt install openssh-server
  ```

### File System
* Get a history of commands executed 
    ```bash
    $ history 
    ```
* Copy the history into a file to refer to it later (example shows history is saved in history_for_print.txt)
    ```bash
    $ history > history_for_print.txt
    ```
* Find the Process status of a process with the word "cisco"
  ```bash
  $ ps -ef | grep cisco
  ```
* Copy files or directories 
  ```bash
  $ cp -r [SOURCE_PATH] [DESTINATION_PATH]
  ```
* Secure file transfer 
  ```bash
  $ scp [USERNAME]@[LOCALHOST]:[SOURCE_PATH]/file.extension [DESTINATION_PATH]
  ```
* List files in long list format and long list that shows hidden files
  ```bash
  $ ls -l     # long list
  $ ls -la    # long list with hidden files
  ```
* View the inside for a file without opening an editor
  ```bash
  $ cat [path/filename.extension]
  ```
### Permissions
* Give read, write and execute permissions to folder /home/newUser, see this for more information: [What does chmod 777 means?](https://www.maketecheasier.com/file-permissions-what-does-chmod-777-means/)
  ```bash
  $ sudo chmod 777 -R /home/newUser
  ```
* Change the owner of /home/newUser to kristel user and kristel group
  ```bash
  $ sudo chown kristel:kristel -R /home/newUser
  ```

### Process or Machine Commands
* Shutdown or restart a machine 
  ```bash
  $ sudo shutdown now 
  $ sudo reboot now
  ```
* And to kill the process 
  ```bash
  $ kill 9009
  ```
* Get the IP Address of the machine 
  ```bash
  $ ip a
  ```
* SSH from a host machine to another machine (i.e. VM)
  ```bash
  $ ssh [USERNAME]@[MACHINE_NAME/IP_ADDRESS]
  $ ssh [USERNAME]@localhost
  ```
* Display information about your specific Linux distribution 
  ```bash
  $ lsb_release -a
  ```
* Prints the machine hardware
  ```bash
  $ uname -m
  $ uname -sm
  ```
* SSH to another machine  
  ```bash
  $ ssh [USERNAME]@[MACHINE_NAME/IP_ADDRESS]
  ```
* Display detailed information relating to a file or file system on a Linux system 
  ```bash
  $ stat /opt/ixico/*
  ```

### Troubleshooting
* If you get an error message saying 
  ```
  E: Could not get lock /var/lib/dpkg/lock-frontend - open (11: Resource temporarily unavailable)
  E: Unable to acquire the dpkg front end lock (/var/lib/dpkg/lock-frontend), is another process using it?
  ```
  * Run the following command to check which other processes is running the apt command (package manager for handling software):
  ```bash
  $ ps aux | grep -i apt
  ```
* If you get a response like below then follow the following results: 
  ```
  root   2527    0.0   0.0   ... /usr/lib/apt/apt.systemd.daily install
  ```
  * Then you must check if the Automatic Software & Updates is enabled and change it from Show Applications > Software & Updates > Updates tab > Automatically check for updates: Never

### Hotkeys
* Logs 
  * Shift+G - to go to the end of the interactive logs

---
## Useful Notes
* Use the following website itsfoss.com/could-not-get-lock-error
