# Chapter 05 - Let's get Hooked!

## Theory Assignment:

### What is the difference between `Named export`, `Default export`, and `* as export`?

- Named Export: With named exports, one can have multiple named exports per file. Then import the specific exports they want surrounded in braces. The name of imported module has to be the same as the name of the exported module.

  - Import Like: `import {MyComponent} from "./MyComponent";`
  - export like: `export const MyComponent = () => {}`

- Default Export(): One can have only one default export per file. When we import we have to specify a name.

  - import like: `import MyComponent from "./MyComponent";`
  - export like: `export default MyComponent;`

- Namespace Export (\*): Import all the named exports like :
  - `import \* as MainComponents from "./MyComponent";`
  - `// use MainComponents.MyComponent and MainComponents.MyComponent2 here`

### What is the importance of `config.js` file?

- The `config.js` file is important because it holds all the important settings and options for a software application in one place.
- It allows developers to easily change how the app works without having to change the actual code.
- This separation of configuration from code makes the app more flexible, secure, and easy to manage in different environments like development, testing, and production.
- It also helps protect sensitive information and keeps the code clean and organized. In simple terms, it's a key tool for building and maintaining software effectively.

- For example:

  ```
  NAME='MURTUZA'
  SURNAME='RANGWALA'
  ```

### What are `React Hooks`?

- React Hooks are special tools that help functional components in React do more things than just a normal functions.
- In React version 16.8, React introduced a new pattern called Hooks. React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks allow you to reuse stateful logic without changing your component hierarchy.

### Why do we need `useState Hook`?

- We use the `useState` Hook in React to remember and change information in our components. This is important because it allows our components to:

      - React when users do things like clicking buttons or typing.
      - Automatically update when information changes.
      - Show different things on the screen.
      - Keep our components clean and easy to work with.

- In a nutshell, useState helps our React components stay dynamic, interactive, and organized.
- The variable of `useState Hook` changes data, then it also change the User Interface accordingly.
- Syntax:

  ```
  const [state, setState] = useState(initialstate);
  ```

## Coding Assignment(In Code Folder):

- `Clean up` your code.
- Create a `Folder Structure` for your app.
- Make `different files` for each Component.
- Create a `config file`.
- Use all types of `import and export`.
- Create a `Search Box` in your App.
- Use `useState` to create a variable and `bind` it to the input box.
- Try to make your `search bar work`.
