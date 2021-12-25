import { Button, Input } from "@mui/material"
import { shallow } from "enzyme"
import CardItem from "../../unit/5-CardItem"

describe("CardList", () => {
  const mockInitialCards = [
    { text: "card1", description: "desc1" },
    { text: "card2", description: "desc1" },
    { text: "card3", description: "desc1" },
  ]

  it("should render only input field if no initialCard", async () => {
    const { default: CardList } = await import(".")
    const wrapper = shallow(<CardList />)

    expect(wrapper.find(Button).length).toBe(1)
    expect(wrapper.find(Input).length).toBe(1)
    expect(wrapper.find(CardItem).length).toBe(0)
  })

  it("should render initialCards", async () => {
    const { default: CardList } = await import(".")
    const wrapper = shallow(<CardList initialCards={mockInitialCards} />)

    expect(wrapper.find(CardItem).length).toBe(3)
  })

  it("should render more CardItem if click button", async () => {
    const { default: CardList } = await import(".")
    const wrapper = shallow(<CardList initialCards={mockInitialCards} />)

    expect(wrapper.find(CardItem).length).toBe(3)
    wrapper.find(Button).simulate("click")
    expect(wrapper.find(CardItem).length).toBe(4)
  })

  it("should change CardItem color if change color", async () => {
    const { default: CardList } = await import(".")
    const wrapper = shallow(<CardList initialCards={mockInitialCards} />)

    expect(wrapper.find(CardItem).at(0).props().color).toBe("green")
    wrapper.find(Input).simulate("change", { target: { value: "#000000" } })
    expect(wrapper.find(CardItem).at(0).props().color).toBe("#000000")
  })
})

export {}
