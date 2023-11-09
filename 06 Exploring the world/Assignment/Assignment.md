# Chapter 06 - Exploring the world

## Theory Assignment:

### What is `Microservice`?

- `Microservices architecture` (often shortened to microservices) refers to an architectural style for developing applications. Microservices allow a large application to be separated into smaller independent parts, with each part having its own area of responsibility.

- Some of Advantages of Microservice :

  - `Flexibility`: Since microservices are deployed autonomously, it’s easier to correct errors and handle app releases. You can expand the functionality of an app with new features without remaking the entire structure and undo the update in case of a failure.
  - `Scalability`: Developers scale microservices separately from each other, you can scale up or down subsystems on demand.
  - `Faster Development`: Collaboration in small teams allows you to manage microservices in a very speedy manner.
  - `Isolation`: If one of the services fails, the team can exploit another service without blocking an application’s work.

- Some of disadvantages of Microservice :
  - Lack of consistency
  - Difficult in Testing
  - Technology Diversity
  - Compability Issue

### What is `Monolith architecture`?

- `Monolithic architecture` is a singular, large computing network with one code base that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming.

- Some of Advantages of Monolith:

  - Easy deployment: One executable file or directory makes deployment easier.
  - Development: When an application is built with one code base, it is easier to develop.
  - Performance: In a centralized code base and repository, one API can often perform the same function that numerous APIs perform with microservices.
  - Simplified testing: Since a monolithic application is a single, centralized unit, end-to-end testing can be performed faster than with a distributed application.
  - Easy debugging: With all code located in one place, it’s easier to follow a request and find an issue.

- Some of disadvantages of Monolith:
  - Slower development speed: A large, monolithic application makes development more complex and slower.
  - Scalability: You can’t scale individual components.
  - Reliability: If there’s an error in any module, it could affect the entire application’s availability.
  - Barrier to technology adoption: Any changes in the framework or language affects the entire application, making changes often expensive and time-consuming.
  - Lack of flexibility: A monolith is constrained by the technologies already used in the monolith.
  - Deployment: A small change to a monolithic application requires the redeployment of the entire monolith.

### What is the `difference` between `Monolith and Microservice?

- In simple Words
- Monoliths are simpler to start with and are suitable for smaller projects or when simplicity is a priority.
- Microservices are ideal for larger and more complex applications that require scalability, flexibility, and the ability to manage services independently.

| Aspect                      | Monolithic Architecture                  | Microservices Architecture                    |
| --------------------------- | ---------------------------------------- | --------------------------------------------- |
| **Unit of Development**     | Single, self-contained unit              | Multiple independent services                 |
| **Integration**             | Tightly integrated components            | Loosely coupled services                      |
| **Scalability**             | Entire application                       | Individual services                           |
| **Maintenance**             | Can become complex                       | Easier to maintain                            |
| **Development Speed**       | Faster for small to medium projects      | Suitable for large and complex projects       |
| **Flexibility and Updates** | Limited flexibility and riskier updates  | Easy updates and changes                      |
| **Complexity**              | Simpler, suitable for smaller projects   | Complex, requires a robust infrastructure     |
| **Isolation**               | Issues can impact the entire application | Isolated issues in individual services        |
| **Technology Diversity**    | Single technology stack                  | Different technologies for different services |

![Monolith vs Microservices](../Assignment/Monolith%20vs%20microservices.png)

### Why do we need a `useEffect Hook`?

- The `useEffect Hook` in React helps you manage things that your component needs to do when it's created, updated, or removed. It's like a to-do list for your component. You can use it to fetch data, update the user interface, or perform other tasks at the right time. It keeps your component organized and ensures it works smoothly, even when dealing with things that take time or happen in the background.

- Syntax:

```
    useEffect(() => {
    // Your code for side effects goes here
    // This code runs after the component renders
    }, [dependencies]);

```

### What is `Optional Chaining`?

- Imagine you're trying to reach a specific room in a house. Instead of running into dead ends and getting lost, optional chaining acts like a wise guide that checks each door before opening it. If a door is locked or doesn't exist, it simply moves on to the next one without throwing an error. This helps you avoid unnecessary errors and navigate your code more smoothly.

- In simpler terms, optional chaining is like a protective shield around your code. It ensures that you don't accidentally access or manipulate properties or methods that might not exist, preventing unexpected errors and crashes. It's like having a safety net before you make any risky moves in your programming journey.

- The `?` operator checks if each property in the chain exists before attempting to access it. If any property is undefined or null, the expression short-circuits and returns undefined. This avoids `"Cannot read property of undefined"` errors and makes your code more robust.

### What is `Shimmer UI`?

- `Shimmer UI` is a technique for visually indicating that content is loading. It involves creating a temporary placeholder that mimics the layout and shape of the actual content, and then applying a shimmering animation to it. This creates a subtle visual effect that suggests that the content is being prepared, and can help to keep users engaged while they wait for the full page or component to load.

- In simple Words `Shimmer UI` is like a placeholder for real content that's still loading.

### What is the difference between `JS expression and JS statement`?

- Imagine `expressions` as the ingredients you use to cook a meal, while statements are the instructions on how to put those ingredients together to create a delicious dish.

- `Expressions` are like the numerical values, variables, and operators that you combine to produce a result, like adding numbers or concatenating strings. They are the building blocks of computations.

- Examples of expressions:

  - 10 + 5
  - "Hello, world!"
  - x \* y
  - Math.sqrt(16)

- `Statements` are like the cooking instructions that tell you what to do with those ingredients. They instruct the JavaScript interpreter to perform actions, such as assigning values to variables, calling functions, and controlling the flow of the program. They are the instructions for executing actions.

- Examples of statements:

  - let x = 10;
  - console.log("This is a message");
  - if (x > 5) { console.log("x is greater than 5"); }

- In simpler terms, expressions are about producing something (a value), while statements are about doing something (an action). Expressions are the building blocks of values, while statements are the building blocks of instructions.

### What is `Conditional Rendering`? explain with a code example.

- Conditional rendering is a technique used in web development to dynamically display content based on certain conditions. It allows you to create more dynamic and responsive user interfaces that adapt to changes in data or user interactions.

- Example: Displaying a Welcome Message Based on Logged-In Status

```
    import React from 'react';

    const WelcomeMessage = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return <h1>Welcome back, John Doe!</h1>;
    } else {
        return <h1>Please log in to view your profile.</h1>;
    }
    };

    export default WelcomeMessage;
```

- Benefits of Conditional Rendering

  - Dynamic UI Elements: It allows you to create UI elements that change and adapt based on user interactions or data changes.

  - Improved User Experience: It enhances the user experience by providing relevant and context-aware content based on the user's actions or current state.

  - Modular and Reusable Code: It promotes modularity by encapsulating conditional rendering logic within components, making them reusable and easier to maintain.

  - Efficient Performance: It avoids rendering unnecessary UI elements, improving the overall performance of the application.

### What is `CORS`?

- `Cross-origin resource sharing (CORS)` is a security mechanism that restricts web pages from making requests to servers that don't belong to the same domain. This is done to prevent malicious websites from stealing data or performing unauthorized actions on other websites.

- It's like having a gatekeeper who only allows authorized requests to pass through.

- When a web page makes a request to a server, the browser checks the request's origin. The origin is a combination of the domain, the port, and the protocol (HTTPS or HTTP). If the origin of the request is different from the origin of the web page, the browser sends a CORS preflight request to the server to check if the server allows cross-origin requests. The preflight request includes the headers that the browser plans to use in the actual request. If the server responds with an appropriate CORS header, the browser can proceed with the actual request.

- CORS can be implemented on the server-side using HTTP headers. The most common CORS headers are:

  - Access-Control-Allow-Origin: This header tells the browser which domains are allowed to make requests to the server.

  - Access-Control-Allow-Methods: This header tells the browser which HTTP methods are allowed for cross-origin requests.

  - Access-Control-Allow-Headers: This header tells the browser which HTTP headers are allowed in cross-origin requests.

### What is `async and await`?

- `async/await` is the way for writing javascript code in asynchronous way using promises.

- `async` is a keyword used to declare a function as asynchronous. It tells the function to always return a promise, even if you don't explicitly create one.

- `await` is used inside an async function to pause the execution of the function until the promise is resolved.

- **Example**:

```
    async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('An error occurred: ', error);
    }
    }

    fetchData();
```

### What is the use of `const json = await data.json()`; in `getRestaurants()`?

- The code `const json = await data.json()` is used to parse JSON data from a response object. The await keyword is used to wait for the asynchronous operation to complete before assigning the JSON data to the json variable.

## Coding Assignment:

- Play with the `useEffect Hook` to see when it is called? (before or after render)
- Play with the `dependency array` in useEffect Hook.
- Play with the `developer console` by putting a `debugger` in render and `useEffect`.
- Call an `actual API call`.
- `Handle Error` in your `API call`.
- Build `Shimmer UI` when `data is not loaded`.
- `Render your UI` with `actual API data`.
- Make `Search functionality` work.
- Make a `Login Logout` button that `toggles with a state`.

## Links:

[Micro and Mono architecture](https://innovecs.com/blog/scalable-web-application-architecture/)
