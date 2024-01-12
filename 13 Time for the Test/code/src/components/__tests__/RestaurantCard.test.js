import {render, screen} from "@testing-library/react"
import RestaurantCard, { withPromtedLabel } from "../RestaurantCard"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/resCardMock.json"
import PROMOTED_MOCK_DATA from "../mocks/promotedResCardMock.json"

it("should render RestaurantCard Component with props data",()=>{
    render(<RestaurantCard {...MOCK_DATA}/>)
    const resName = screen.getByText("URBAN EGG");
    expect(resName).toBeInTheDocument()
})

it("should render Labeled RestaurantCard Component with props data",()=>{
    const RestaurantCardPromoted = withPromtedLabel(RestaurantCard)
    render(<RestaurantCardPromoted {...PROMOTED_MOCK_DATA}/>);
    const CardData = screen.getByText("Veg")
    expect(CardData).toBeInTheDocument()
})