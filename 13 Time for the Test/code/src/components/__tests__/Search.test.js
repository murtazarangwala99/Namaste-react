import {screen, render, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom"
import Body from "../Body"
import MOCK_DATA from "../mocks/MockResListData.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should render the Body Component with Search Pizza and get 2 cards",async()=>{
    await act(async()=>render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>
    ))
    // const cardsBeforeSearch = screen.findAllByTestId("resCard");
    // expect(cardsBeforeSearch.length).toBe(20);          //undefined
    const searchbtn = screen.getByRole("button",{name:"Search"})
    const searchInput = screen.getByTestId("searchInput")
    // console.log(searchInput)
    fireEvent.change(searchInput,{
        target : {value: "Pizza"}
    })
    fireEvent.click(searchbtn)
    // expect(searchbtn).toBeInTheDocument()
    // screen should load 2 cards

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(2)
    
})

it("should filter top rated Restaurant",async()=>{
    await act(async()=>render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>
    ))

    const topRatedBtn = screen.getByRole("button",{name:"Top Rated Restaurants"})
    fireEvent.click(topRatedBtn)
    const resCards = screen.getAllByTestId("resCard")
    expect(resCards.length).toBe(17)
})