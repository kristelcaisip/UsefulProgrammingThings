# React Native

* For a quick and easy tutorial, check out[Installing React Native on MacOS Tutorial](https://academy.infinite.red/p/installing-react-native-tutorial-on-macos).
* The minimum installations and set up needed are as follow:
    * **XCode** - Apple IDE for building Apple OS apps and also comes with an iOS simulator
    * **Android Studio** - Google's IDE for Android app development and has emulators
    * **Android SDK** - contains Android specific tools (libraries, emulators, debugger, etc.)
    * **Homebrew** - the missing package manager for Mac OS and one of the most important tools (`brew --version`)
    * **Node** - JS runtime environment to run JS on your terminal and other places outside the browser (`node --version`)
    * **Watchman** - productivity tool from Facebook for watching changes to files in your project; this will recompile, rebuild, and reload every time you save changes to your source files (`watchman --version`)
    * **Yarn** - command-line tool created by Facebook that could replace NPM (`yarn --version`)
    * **Cocoapods** - 3rd party packages writtin in Objective-C or Swift; like `yarn` or `npm` but for native iOS code written in Ruby (`pod --version`)
    * **Java Development Kit** - for compiling Android apps
    * **Configure Android Home** - React Native needs to know where all the Android dependencies live following a `npx react-native run-android`, and it looks for `ANDROID_HOME`
        ```
        echo $0             // to tell you which shell you're in (zshrc or bash)

        // Type in the following to copy the lines in ~/.zshrc for zshrc or for bash ~/.bash_profile or ~/.bashrc
        echo "export ANDROID_HOME=\$HOME/Library/Android/sdk
        export PATH=\$PATH:\$ANDROID_HOME/emulator
        export PATH=\$PATH:\$ANDROID_HOME/tools
        export PATH=\$PATH:\$ANDROID_HOME/tools/bin
        export PATH=\$PATH:\$ANDROID_HOME/platform-tools" >> ~/.zshrc

        // Restart your terminal and type in
        echo $ANDROID_HOME              //you should see something like /Users/[USERNAME]/Library/Android/sdk
        ```