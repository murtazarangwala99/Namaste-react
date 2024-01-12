# Episode 13 - Time for the test

## Theory

### What are the different types of testing?

- There are mainly three types of it :

**1. Unit Testing** - Example: header component (One unit/component of Application) in isolation

**2. Integration Testing** - Example: Search - Testing integration of Components(develop a flow)

**3. End to End Testing(E2E Testing)** - Testing React application land on website till leave the website.

### What is Enzyme?

- Enzyme is a JavaScript testing utility for React that facilitates the testing of React components output. It is often used in conjunction with testing libraries like Jest. Enzyme provides a set of utility functions for rendering React components, interacting with them, and asserting their output.

### Enzyme vs React Testing Library

- Enzyme and React Testing Library are popular testing utilities for React, but they have different approaches.
- Enzyme offers shallow rendering, a jQuery-like API, and allows testing of component state and lifecycle. It is component-centric and works well with Jest's snapshot testing.
- React Testing Library focuses on testing from a user's perspective, avoiding implementation details, and emphasizing full DOM rendering. It encourages querying components by user interactions, accessibility roles, and text content.

### What is Jest and why do we use it?

- Jest is a JavaScript testing framework developed by Facebook, widely used for testing JavaScript and React applications. It offers zero-configuration setup, a built-in test runner for parallel execution, snapshot testing for easy output comparison, a powerful mocking system, code coverage analysis, seamless handling of asynchronous code, and support for test suites and cases. Jest is widely adopted in the React ecosystem, provides extensibility, and integrates well with continuous integration tools, making it a popular choice due to its features, ease of use, and community support.

## Coding

### Setup React Testing Library

### Write Unit Tests for Header Component to test for Logo, Cart - 0 items, and Online Status

### Write an Integration Test case for the search feature on the Homepage

### Write Integration Test case for Add to Cart flow
