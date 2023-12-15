# Episode 11

## Higher order Component

- Higher-order component (HOC) is a function that takes a component and returns a new component with enhanced functionality.
- It's a powerful design pattern that promotes code reuse and cleaner component logic.

**Where to use HOC?**

- _Adding authentication:_ An HOC can inject authentication logic into any component it wraps, ensuring only authorized users access specific parts of the application.

- _Sharing state:_ An HOC can share state between different components, eliminating the need for prop drilling or complex state management solutions.

- _Adding data fetching:_ An HOC can handle data fetching logic for a component, simplifying its implementation and reducing code duplication.

- _Adding error handling:_ An HOC can handle errors gracefully for wrapped components, displaying informative messages or fallback content.

**When to use HOCs:**

- When you need to share functionality between multiple components.
- When you want to keep your component logic clean and organized.
- When you want to add new features to existing components without modifying their code.

**Some drawbacks:**

- _Increased complexity:_ HOCs can make your code more difficult to understand and maintain, especially for nested HOCs.
- _Performance overhead:_ Creating and rendering additional components can impact performance.
- _Testing challenges:_ Testing HOCs can be more complex than testing regular components.

## Controlled and Uncontrolled Component

- TODO: Read about it.

## Lifting the state up in React(IMP)

- Imp
- TODO: Read about it.

## Props Drilling

- IMP
- Provider, consumer, create
- TODO: Read about it.
