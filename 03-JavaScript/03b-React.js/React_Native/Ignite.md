# Ignite with React Native

* Using React Native + Ignite for rapid implementation and boiler plater generators

## Setup

* NOTE: Do not install `react-native-cli` globally!! Otherwise, you'll get an error similar to
    ```
    /Users/kc/.npm/_npx/e31027f3785124a8/node_modules/gluegun/build/index.js:13
    throw up;
    ^
    yarn run v1.22.10
    warning ../package.json: No license field
    error Command "format" not found.
    info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

    (Use `node --trace-uncaught ...` to show where the exception was thrown)
    ```
* If you get any issues, run the command below to see the diagnosis
    ```
    npx @react-native-community/cli doctor
    ```
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
* [Solve issues when creating a new App Part 1](https://github.com/infinitered/ignite/issues/1588)
* [Solve issues when creating a new App Part 2](https://github.com/infinitered/ignite/issues/1580)
