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
---

# Useful Notes

* [Introducing Ignite for React Native](https://www.youtube.com/watch?v=5SVLs_NN_uY)
* [GitHub for Infinite Red Ignite](https://github.com/infinitered/ignite)
* [Introduction Ignite 6.0 Flame](https://shift.infinite.red/introducing-ignite-4-0-flame-1dfc891f9966)
* [Step by Step Tutorial Part 1](https://shift.infinite.red/creating-a-trivia-app-with-ignite-bowser-part-1-1987cc6e93a1)
* [NPM JS](https://www.npmjs.com/package/ignite-cli)
* 
