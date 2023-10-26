# Episode 02 - Igniting Our App

## What is `NPM` ??

- NPM is a package manager for Node and JavaScipt. NPM is widely used in the JavaScript ecosystem to manage dependencies, share code, and automate various development tasks.
- We can initialize npm by `npm init`

## What is Parcel/Webpacck ? Why do we need it ?

- Parcel and Webpack are both popular tools for bundling and managing assets, such as JavaScript, CSS, and other resources.
- It has a crucial role in optimizing web applications, improving performance etc.

## What is `.parcel-cache` ?

- The `.parcel-cache` directory is used to store cached data related to our project's assets.
- It is caching mechanism part of what makes Parcel fast during development and when building for production.

## What is `npx` ?

- `npx` is used for executing package binaries from packages that aren't globally installed on system.
- We can use any npm package without installing it our local system.

## What is difference between `dependencies` vs `devDependencies` ?

- `dependencies` are npm packages which we want to use in our Project and in Production also. Example: `React, Angular, Express` etc..
- `devDependecies` are the npm packages which we use while only development work. Example: `parcel, webpack, mocha` etc..

## What is Tree Shaking ?

- `Tree shaking` is a technique in JavaScript for eliminating dead or unused code (i.e. code that is imported but not actually used) from your final bundle when you're using a module bundler like Webpack or Parcel. The goal is to create smaller and more optimized bundles that load and execute faster in the browser.

## List down favourite 5 superpowers of Parcel and decribe any 3 of them.

### 5 Super Powers:

1. Zero Config
2. Dev Server
3. Hot Reloading
4. Diagnostics
5. Tree shaking

### 1. Dev Server:

- Parcel includes a development server out of the box. Just run ` parcel index.html` to get started.

### 2. Hot Reloading:

- When we make a change, Parcel automatically updates our code in the browser – no page reload necessary!

### 3. Diagnostics:

- If you make an error in your code or configuration, Parcel displays beautiful diagnostics in your terminal and in the browser.

## What is `.gitignore` ? Why should we add and not add into it ?

- `.gitignore` file is a text configuration file used in Git repositories to specify which files and directories should be ignored by Git when tracking changes in your project.

## What is difference between `package.json` and `package-lock.json` ?

- `package.json` is a config for npm, it keeps track of package version install in system.

- `package-lock.json` is a config which keeps track of exact version that has been installed.

## Why should i not modify `package-lock.json`?

- `package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

## What is `node_modules` ? is it a good idea to push that on git ?

- `node_modules` are like cache of modules our project depends on. When we use command `npm install` it downloaded from web and copied into node_modules folder.

- Don't push `node_modules` in github because it contains lots of files, it will cost you memory space.

## What is `dist` Folder ?

- The `dist` folder contains the minimized version of the source code. The code present in the `dist` folder is actually the code which is used on production web applications. Along with the minified code, the `dist` folder also comprises of all the compiled modules that may or may not be used with other systems.

## What is `browserlists` ?

- `Browserslist` is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

## Task:

### Read about dif bundlers: vite, webpack, parcel

![Vite](https://vitejs.dev/)
![WebPack](https://webpack.js.org/)
![Parcel](https://parceljs.org/)

### Read About : caret(^) and tilda(~)

![NPM Versioning](https://dev.to/typescripttv/understanding-npm-versioning-3hn4)

### Read about Script types in HTML(MDN)

![Script Types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type)
