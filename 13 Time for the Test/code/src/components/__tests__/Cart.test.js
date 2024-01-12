import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/MockResListData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import Cart from "../Cart";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordianHeader);
  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(20);
  expect(screen.getByText("Cart - 0")).toBeInTheDocument();
  const addButton = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addButton[0]);
  expect(screen.getByText("Cart - 1")).toBeInTheDocument();
  fireEvent.click(addButton[1]);
  expect(screen.getByText("Cart - 2")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(22);
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(20);
  expect(screen.getByText("Cart is empty. Add Items to the cart!")).toBeInTheDocument();
});
