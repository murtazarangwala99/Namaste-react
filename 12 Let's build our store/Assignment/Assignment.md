# Episode 12 - Let's build our Store

## Theory

### useContext vs Redux.

**useContext:**

- **Like a shared box:** Imagine components putting information in and taking information out of a shared box. Anyone with access to the box can use the information.
- **Simple and lightweight:** Easy to set up and use, especially for small projects.
- **Local focus:** Best for managing state **within a single component or a small group of related components**.
- **Less predictability:** Changes can ripple through components unexpectedly, making debugging a bit trickier.

**Redux:**

- **Like a central bank:** All state changes go through a central "bank" where updates are processed and then sent to specific components.
- **More complex and structured:** Has a bigger learning curve compared to `useContext`, but offers powerful features.
- **Global vision:** Great for managing **complex state across your entire application**, even for components that are far apart.
- **Highly predictable:** State updates follow a clear path, making debugging easier.

**In short:**

- **Use `useContext` for simple, local state needs within a component or small group.**
- **Use Redux for complex, global state management across your entire application.**

### Advantages of using Redux Toolkit over Redux.

**Reduced Boilerplate:** Automatic action types & creators, pre-configured store & middleware.
**Improved DX:** Typing, DevTools integration, concise state updates with Immer.
**Safer Code:** Prevents mutations, centralized payload logic, normalized state structure.
**Additional Perks:** Code splitting, cleaner & maintainable code.

- Redux Toolkit **streamlines setup, boosts developer experience, and minimizes errors**, making it the preferred choice for modern Redux state management.

### Explain Dispatcher.

- The `Dispatcher` in Redux is a centralized gatekeeper for all state updates in your application. It's like a single entry point for any component that wants to change the state of the store. Imagine the dispatcher as a caretaker at a fancy hotel, ensuring that all requests to modify the room (the state) go through them first.

**Dispatcher in Redux:**

- **Traffic director:** Routes state changes (actions) from components to reducers.
- **Single entry point:** All state updates must go through it.
- **Keeps things orderly:** Ensures predictable and controlled state updates.
- **Like a hotel caretaker:** Handles all requests to modify the room (state).

**Dispatcher = State Update Control Center in Redux.**

### Explain Reducer.

- A reducer in Redux is like a miniature chef in your application's kitchen. It receives ingredients (actions) and whips up a fresh dish (updated state) every time they're sent in.

- **State update chef:** Gets actions (instructions) and cooks new state (dish).
- **Pure and predictable:** Always uses same recipe (function) for consistent results.
- **Modular and organized:** Each chef handles specific state part (recipe).
- **No leftovers:** Creates new state, keeps old one untouched.

**Reducer = State update engine in Redux.**

- **Reducer = State-processing chef in Redux.**

### Explain slice.

In Redux, a **slice** is like a pre-packaged meal for state management. It bundles together:

- **Reducer:** The chef who cooks up new state based on actions.
- **Actions:** The instructions for modifying the state (add item, change color, etc.).
- **Initial state:** The starting point for the state managed by this slice.

Think of it as a neatly labeled container in your state pantry, holding everything you need to manage a specific part of your application's state.

**Benefits of slices:**

- **Organized and cleaner:** Makes your code modular and easier to understand.
- **Reduced boilerplate:** No need to write repetitive code for each part of the state.
- **Reusability:** You can share slices across different components.

**In short:**

- **Slice = Pre-packaged state management kit in Redux.**
- **Contains reducer, actions, and initial state.**
- **Keeps things organized and reusable.**

### Explain selector.

A selector in Redux is like a **restaurant waiter in your state kitchen**. It takes your order (the state) and delivers a specific dish (a portion of the state) to your components.

- Here's how it works:

1. **Components place orders:** Components ask for specific information from the state, like "total items in cart" or "current user name".
2. **Selector finds the dish:** The selector receives the order (query) and searches the state (kitchen) for the requested information.
3. **Delivers the dish:** The selector extracts the requested data from the state and serves it up to the component on a platter.

**Why are selectors useful?**

- **Focus on what you need:** Components get only the specific data they care about, reducing complexity and improving performance.
- **Decouple views from state:** Selectors hide the internal structure of the state, making components more flexible and easier to reuse.
- **Memoization magic:** Selectors can remember previous results, avoiding unnecessary state re-calculations and boosting performance.

**Think of the selector as a handy shortcut in your state kitchen.** It lets you access the exact information you need without navigating the entire pantry, making your components leaner and more efficient.

**In short:**

- **Selector = State information delivery person in Redux.**
- **Takes state orders from components and finds specific data.**
- **Serves up only the requested information, keeps components focused.**

### Explain createSlice and the configuration it takes.

`createSlice` in Redux Toolkit is your one-stop shop for creating state management slices. It takes in a configuration object containing several key ingredients:

- **`name`:** This identifies your slice and is used for generating action types and paths within the store.
- **`initialState`:** This defines the starting point for your slice's state, like the blank canvas before painting.
- **`reducers`:** These are the chefs who take actions and whip up updated state (think recipes for different dishes).
- **`extraReducers` (optional):** These are bonus chefs who handle actions from outside your slice (like guest chefs visiting the kitchen).

**In short:**

- `createSlice` = **State management slice factory in Redux Toolkit.**
- Takes `name`, `initialState`, `reducers`, and (optional) `extraReducers`.
- **Delivers a pre-packaged slice kit for organized and efficient state management.**

Remember, it's like ordering a personalized meal for your state needs!

## Coding

• Practice making a store, and slices and do read and write operations using Redux Store
• Build Cart Flow using Redux Store
