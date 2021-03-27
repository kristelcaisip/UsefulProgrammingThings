# Ignite with React Native

* Using React Native + Ignite for rapid implementation and boiler plater generators

## Setup

* **Pre-requisites:** Install Node.js, NPM, NPX, and Expo
    * Install node using the installer from the Node.js website
    * Check the owner of /usr/local/lib/node_modules, change this if it is `root` 

        ```
        $ ls -la /usr/local/lib/node_modules
        $ sudo chown -R $USER /usr/local/lib/node_modules
        ```

    * Install the latest Expo

        ```
        $ npm install -g expo-cli@latest
        $ npm install -g ignite-cli@latest

        ```

* Navigate to a directory and create a new app

    ```
    $ npx ignite-cli new [APP_NAME] --expo
    ```

* Run the application using one or the other command

    ```
    $ cd [APP_NAME]
    $ npm run start
    $ expo start
    ```