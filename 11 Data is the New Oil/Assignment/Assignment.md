# Episode 11- Data is the New Oil

## Theory

### What is prop drilling?

Prop drilling is a way sending props to a child component which is many components below the parent component.
e.g.

```
<ParentComponent/>
    <ChildComponent/>
        <SubChildComponent/>
```

if we need to pass props from `ParentComponent` to `SubChildComponent`, we would require to send the props though `ChildComponent` also.

### What is lifting the state up?

- Lifting the state up or State lifting is a method by which we can get access to the child components from a parent.
- If we want to perform some type of task that requires a state management between multiple children, we can do so by state lifting to their parent.

### What is Context Provider and Context Consumer?

1. `Context Provider` is used to provide access to a context between multiple components of the application. We can provide the access to the context or the data layer to the whole application to the and its subcomponents.

   For example:

   ```jsx
   return (
     <UserContext.Provider value={{ user: user, setUser: setUser }}>
       <Head />
       <Outlet />
       <Footer />
     </UserContext.Provider>
   );
   ```

   In the code above , we are providing the access of UserContext to \<Head /> \<Outlet /> and \<Footer /> component

2. `Context Consumer` is used to consume the context data , provided by react context. We can do this using `useContext` hook for functional components and `Context.Consumer` in clasees based components.

   For example:

   - In Class based components, we can use the Context and use the consumer.
     ```jsx
     <UserContext.Consumer>{({ user }) => <h1>{user.name}</h1>}</UserContext.Consumer>
     ```
   - In Functional components we can use `useContext` hook to consume the context.

     ```jsx
     import UserContext from "../utils/UserContext";
     import { useContext } from "react";

     const { user } = useContext(UserContext);
     ```

### If you don’t pass a value to the provider does it take the default value?

If we do not override the values of context it takes the default values form the context , when we initialise the context.

## Coding

### Practice React Context with code examples

### Try out Nested Contexts

## References

[Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
[React Context](https://reactjs.org/docs/context.html)
