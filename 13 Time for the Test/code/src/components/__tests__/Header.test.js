import { Provider } from "react-redux";
import Header from "../Header"
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


it("should render Header component with login button", () => { 
       render(
        <BrowserRouter>
        <Provider store={appStore}>
           <Header/>
        </Provider>
        </BrowserRouter>
       )

    //    const button = screen.getByRole("button");
       const button = screen.getByRole("button", {name: "Login"});
    //    const button = screen.getByText("Login");
       expect(button).toBeInTheDocument()
 })

it("should render Header component with cart items 0", () => { 
    render(
     <BrowserRouter>
     <Provider store={appStore}>
        <Header/>
     </Provider>
     </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart - 0");
    expect(cartItems).toBeInTheDocument()
})

it("should render Header component with cart item", () => { 
    render(
     <BrowserRouter>
     <Provider store={appStore}>
        <Header/>
     </Provider>
     </BrowserRouter>
    )

    const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument()
})

it("should change Login button to Logout on Click", () => { 
    render(
     <BrowserRouter>
     <Provider store={appStore}>
        <Header/>
     </Provider>
     </BrowserRouter>
    )

    const LoginButton = screen.getByRole("button", {name: "Login"});
    fireEvent.click(LoginButton)
    const LogoutButton = screen.getByRole("button", {name: "Logout"});
    expect(LogoutButton).toBeInTheDocument()
})