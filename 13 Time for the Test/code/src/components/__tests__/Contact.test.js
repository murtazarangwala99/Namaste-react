import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Page Test Cases", () => {

  // Helper Functions
  // beforeAll(()=>{
  //   console.log("Before All")
  // })

  // beforeEach(()=>{
  //   console.log("Before Each")
  // })

  // afterAll(()=>{
  //   console.log("After All")
  // })

  // afterEach(()=>{
  //   console.log("After Each")
  // })

  it("Should load Contact us Component", () => {
    // render on JS-DOM
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load Button in Contact us Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Should have text as Submit in Contact Component", () => {
    render(<Contact />);
    const text = screen.getByText("Submit");
    expect(text).toBeInTheDocument();
  });

  test("Should load two input boxes Contact Component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    // expect(inputBoxes).toBeInTheDocument();
    // throws error received value must be an HTMLElement or an SVGElement.
    // Received has type:  array
    // expect(inputBoxes).toBeTruthy();
    expect(inputBoxes.length).toBe(2);
  });
});
// ....it or test both are same....
// test("Should load Contact us Component", () => {
//   // render on JS-DOM
//   render(<Contact />);
//   const heading = screen.getByRole("heading");
//   expect(heading).toBeInTheDocument();
// });

// test("Should load Button in Contact us Component", () => {
//   render(<Contact />);
//   const button = screen.getByRole("button");
//   expect(button).toBeInTheDocument();
// });

// test("Should have text as Submit in Contact Component", () => {
//   render(<Contact />);
//   const text = screen.getByText("Submit");
//   expect(text).toBeInTheDocument();
// });

// test("Should load two input boxes Contact Component", () => {
//   render(<Contact />);
//   const inputBoxes = screen.getAllByRole("textbox");
//   // expect(inputBoxes).toBeInTheDocument();
//   // throws error received value must be an HTMLElement or an SVGElement.
//   // Received has type:  array
//   // expect(inputBoxes).toBeTruthy();
//   expect(inputBoxes.length).toBe(2);
// });
