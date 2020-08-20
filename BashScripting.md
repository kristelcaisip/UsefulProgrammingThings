# Bash Scripting

* `.sh` used for Shell scripts
* Declare what interpreter you are using by adding a **Shebang** `#!/bin/` in the beginning of the script
  * Sharp and bang annotation in music
  * Anything that comes after the shebang, tells which interpreter to use
  * Examples:
    * `#!/bin/sh` - for shell
      * Just the interpret of commands, does not give full access in terms of functionality
    * `#!/bin/bash` - for bash
      * terminal instance, give you much more streamlined experience when using Linux/Unix operating system
    * `#!/bin/python` - for python
* Make it executable (changing file permissions)
  * `chmod +x [.sh_file_name]`
  * `chmod -x [.sh_file_name]`
* Variables
  * Difference between `$VAR_NAME` and `$(VAR_NAME)`
    * `$VAR_NAME` - custom variable name
    * `$(VAR_NAME)` - uses some kind of output

## Useful Links

* [Shell Scripting + Shebang](https://www.youtube.com/watch?v=LTuuMtQR1uQ)
