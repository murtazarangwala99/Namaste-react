# Episode 13

## Types of Testing (Developer)

- Unit Testing
  - Example: header component (One unit/component of Application) in isolation
- Integration Testing
  - Example: Search - Testing integration of Components(develop a flow)
- End to End Testing(E2E Testing)
  - Testing React application land on website till leave the website.

## Library

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

- React Testing library comes inbuild with `create react app`

- It uses `Jest` behind the Scene.

## Setting up Testing in our app:

- Install React Testing Libary
  - `npm install -D @testing-library/react`
- Install Jest
  - `npm install -D jest`
- Install babel dependency for Jest
  - `npm install -D babel-jest @babel/core @babel/preset-env`
- Configure babel for Jest
  ```js
  <!-- babel.config.js -->
  module.exports = {
    presets: [
      ["@babel/preset-env", { targets: { node: "current" } }],
      "@babel/preset-typescript",
    ],
  };
  ```
- Configure Parcel Config file to disable default babel transpilation

  ```json
  <!-- .parcelrc -->
  {
    "extends": "@parcel/config-default",
    "transformers": {
      "*.{js,mjs,jsx,cjs,ts,tsx}": [
        "@parcel/transformer-js",
        "@parcel/transformer-react-refresh-wrap"
      ]
    }
  }
  ```

- Jest Configuration
  - `npx jest --init`
- Install jsDom Library
  - `npm install -D jest-environment-jsdom`
- Create Folder `__tests__` add test files inside it.
- Basic Test File for JS Looks Like this :

  ```js
  import { sum } from "../sum";

  test("Sum Function should calculate the sum of two numbers", () => {
    // sum();
    const result = sum(3, 4);
    // Assertion
    expect(result).toBe(7);
  });
  ```

## More of Configuration for React

- Make JSX work in Test Cases we have to install _preset-react_

  `npm i -D @babel/preset-react`

- Include @babel/preset-react inside `babel.config.js`

  `["@babel/preset-react", { runtime: "automatic" }],`

- Install `@testing-library/jest-dom` for using `toBeInTheDocument()` in Testing File

  `npm install -D @testing-library/jest-dom`

## Read More:

[Parcel-Babel](https://parceljs.org/languages/javascript/#babel)

[JestJs](https://jestjs.io/docs/getting-started)

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

[Vite vs Webpack](https://kinsta.com/blog/vite-vs-webpack/)

[@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom)
