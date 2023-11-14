# Chapter 07 - Finding the Path

## Theory Assignment:

### What are various ways to `add images` into our App? Explain with `code examples`.

1. Using the `full URL of the image` for the web (CDN) or any public images.
   Example :

```
    <img src="https://reactjs.org/logo-og.png" alt="React Image" />
```

2. Adding the image into the project `Drag your image into your project` and `import it` into the desired component

```
    import reactLogo from "./reactLogo.png";
    export default function App() {
    return <img src={reactLogo} alt="react logo" />
    }
```

3. The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders.

```
    import reactLogo from "../../assets/images/reactLogo.png";
    export default function App() {
    return <img src={reactLogo} alt="react logo" />
    }
```

### What would happen if we do `console.log(useState())`?

- It will give us araay `[undefined, function]`. First item in Array is State which is `undefined` and second item in Array `setState` named as `bound dispatchSetState`

### How will `useEffect` behave if we `don't add` a `dependency array`?

- Syntax of `useEffect` is: `useEffect(() => {}, []);`

Case 1 : When the _`dependency array is not included`_ in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.

```
    useEffect(() => {
        console.log("I run everytime this component rerenders")
    });
```

Case 2 : When the _`dependency array is empty`_ in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.

```
    useEffect(() => {
        console.log("I Only run once (When the component gets mounted)")
    }, []);
```

Case 3 : When the _`dependency array contains a condition`,_ the callback function will be executed `one time` during the initial render of the component and also rerender if there is a `change in the condition`.

```
    useEffect(() => {
        console.log("I run every-time when my condition changed")
    }, [condition]);
```

### What is `SPA`?

- **_SPAs (Single-Page Applications)_** are web applications that load a single HTML page and dynamically update the page as the user interacts with it, without having to reload the entire page. This creates a more fluid and responsive user experience.

**- Benefits of using SPAs:**

- Enhanced User Experience (UX)
- Faster Performance
- Improved SEO Potential
- Offline Functionality
- Developer Productivity

**- Drawbacks of using SPAs:**

- Initial Load Time
- Complex Development
- Accessibility Considerations
- SEO Challenges

### What is the `difference` between `Client Side Routing` and `Server Side Routing`?

**- Client-Side Routing**

- In client-side routing, the URL changes are handled by JavaScript running in the user's web browser. When a user clicks on a link or enters a new URL in the address bar, JavaScript intercepts the request and prevents the browser from reloading the entire page.
- Instead, it updates the application's UI to display the corresponding content, often by dynamically rendering new components or modifying existing ones.

**- Server-Side Routing**

- Server-side routing, on the other hand, involves the server responding to URL changes and generating the corresponding HTML content. When a user clicks on a link or enters a new URL, the browser sends a request to the server, and the server sends back a complete HTML page containing the requested content.
- The browser then replaces the current page with the new page received from the server.

## Coding Assignment:

### Add `Shimmer Effect without installing a library`.

### Install `react-router-dom`.

### Create an `appRouter` and `Provide it to the app`.

### Create a `Home, About, and Contact Page` with Link (use child routes).

### Make an `Error page` for `routing errors`.

### Create a `Restaurant Page` with `dynamic restaurant ID`.

### (Extra) - Create a `login Page` using `Formik Library`.

## Links:

- [React Router DOM](https://reactrouter.com/en/main)
- [Client Side Routing](https://reactrouter.com/en/main/start/overview)
- [Formik](https://formik.org/)
- [GraphQL](https://graphql.org/)
