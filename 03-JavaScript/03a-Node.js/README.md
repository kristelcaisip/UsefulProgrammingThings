# Node.js

* Server-side programming for JavaScript

## NPM

* Node Package Manager (https://www.npmjs.com/)
    * Package management (similar to Maven but for JS)
    * Download dependencies for JS and stored in `node_modules`
* Installed automatically when Node.js is installed

## package.json

* Serves as a documentation for your project package dependencies
* Specify versions of a package that your project can use (using semantic versioning rules)
* Makes your build reproducible
    * Easy to share with other developers
* More information [Getting Started with pacakge.json](https://docs.npmjs.com/getting-started/using-a-package.json)

## Cheatsheet - Common CLI Commands

```
$ npm init                                   // initialise a package.json file of your project
$ npm install                               // recreate the node_modules and re-installs the dependencies
$ npm install [PACKAGE_NAME] --save-dev     // install module used for development dependency for a project
$ npm install [PACKAGE_NAME] --save         // install node module in which your project is directly dependent on

```

## node_modules directory

* Where all the dependencies are created
* You'll notice that all the node_modules have the same structure for this
* Whatever is listed on the `devDependencies` property is installed and stored in node_modules