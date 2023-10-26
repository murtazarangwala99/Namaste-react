# Chapter 03 - Laying the Foundation

## Theory Assignment:

### What is `JSX`?

- `JSX`, stands for "JavaScript XML" is a syntax extension for JavaScript that is commonly used in React, a popular JavaScript library for building user interfaces.
- `JSX` allows you to write HTML-like code within your JavaScript code, making it easier to create and manipulate the structure of web pages in a more declarative and component-based manner.
- `JSX` allows us to write HTML elements in JavaScript and place them in the DOM without any `createElement()` and/or `appendChild()` methods.
- `JSX` converts HTML tags into react elements.

### Superpowers of `JSX`.

- Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single `.jsx` file. JSX is easy to maintain and debug.
- We can embed JavaScript expressions within JSX by wrapping them in curly braces {}. This allows us to inject dynamic data or logic directly into your JSX code.

### Role of type `attribute` in script tag? What `options can I use` there?

- The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.

- ### `type` attribute can be of the following types:

- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.

  ### Syntax

  ```
  <script type="text/javascript"></script>
  ```

- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

### `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.

- The Difference is stated below:

  - `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. The `{}` can embed a javascript expression or a variable inside it.

  - `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value. A component is written inside the `{<  />}` expression.

  - `<TitleComponent></TitleComponent>` : `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.

## Coding Assignment:

### 01: Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")

- Create the `same element using JSX`
- Create a `functional component of the same with JSX`
- `Pass attribute` into the tag in `JSX`
- `Composition of Component` (Add a component inside another)
- `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

### 02: Create a `Header Component` from scratch using `Functional Component` with JSX

- Add a `Logo on Left`
- Add a `search bar in middle`
- Add `User icon on right`
- Add `CSS to make it look nice`

## References:

- [Babel](https://babeljs.io/)
- [Attribute Type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type)
- [JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Babel Playground](https://babeljs.io/repl#)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)
