# Episode 7

## **useEffect:**

- If no dependency array is given, `useEffect` is called on every component render.
  - useEffect(()=>{})
- If dependency array is empty, `useEffect` is called on only initial Render(Just Once).
  - useEffect(()=>{}, [])
- If dependecy array is given, `useEffect` is called everytime dependency updated, everytime `btnName` changes `useEffect` will render.
  - useEffect(()=>{},[btnName])

## **useState:**

- Never use `useState` outside of Component.
- Try to call `useState` on Top.
- Never use `useState` inside condition,loops,functions.

## **Routing:**

- install using (npm i react-router-dom)
- importing it.

```
   import { createBrowserRouter, RouterProvider } from "react-router-dom";
```

- Using it and Linking pages.

```
   const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout />,
   },
   {
      path: "/about",
      element: <About />,
   },
   ]);
```

- Rendering it.

```
   root.render(<RouterProvider router={appRouter} />);
```

## Linking Pages in React using `React-router-dom`

- import in which component we want it.

  `import {Link} from "react-router-dom";`

- Use `Link` tag where we wanted to Link pages

  ```
    <li>
      <Link to="/about">About us</Link>
    </li>
  ```

## Two Type of Routing:

- Server Side Routing
- Client Side Routing

## Links :

[ReactRouter](https://reactrouter.com/en/main)
