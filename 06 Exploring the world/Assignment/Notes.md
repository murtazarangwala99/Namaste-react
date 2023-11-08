# Episode 6

## Ways to use API:

1. Page Loads -> API Call -> Render UI

   - Here api take 500ms then it wait then render

2. Page Loads -> Render UI -> API Call -> Render with Data

   - quickly render then wait for api then again render with data

## useEffect()

- Syntax: useEffect(() => {}, []);
- useEffect(callback, [dependecy]);
- Read more..

## What is CORS Policy ?

![CORS Video](https://www.youtube.com/watch?v=tcLW5d0KAYE)

## Notes:

- Whenever state variable updates React trigger Reconsiliation Cycle(re-render Components)
- React re-render whole component but change/update only particular element

## Read about this:

- Optional Chaining
- Shimmer UI
- Conditional Rendering
- useState
