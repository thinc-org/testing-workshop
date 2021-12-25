import { Typography } from "@mui/material"
import { shallow } from "enzyme"

describe("CardList", () => {
  const mockText = "text"
  const mockDescription = "description"
  const mockColor = "#ffffff"

  it("should render text as input", async () => {
    const CardItem = (await import(".")).default
    const wrapper = shallow(<CardItem text={mockText} description={mockDescription} color={mockColor} />)
    expect(wrapper.find(Typography).at(0).text()).toBe(mockText)
    expect(wrapper.find(Typography).at(1).text()).toBe(mockDescription)

    const containerStyles = wrapper.find("div").prop("style")
    expect(containerStyles).toHaveProperty("background", mockColor)
  })
})
