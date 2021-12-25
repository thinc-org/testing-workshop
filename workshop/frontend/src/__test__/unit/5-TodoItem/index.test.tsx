import { fireEvent, render } from "@testing-library/react"

describe("TodoItem", () => {
  const mockText = "text"
  const onChangeSpy = jest.fn()

  const mockProps = {
    text: mockText,
    checked: false,
    onChange: onChangeSpy,
  }

  const handleOpenSpy = jest.fn()
  const useDialogSpy = jest.fn(() => ({
    handleOpen: handleOpenSpy,
  }))

  jest.doMock("../4-useDialog", () => useDialogSpy)

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should render correctly", async () => {
    const { default: TodoItem } = await import(".")

    const { container } = render(<TodoItem {...mockProps} />)
    expect(container).toMatchSnapshot()
  })

  it("should render black text if checked is false", async () => {
    const { default: TodoItem } = await import(".")

    const { getByText } = render(<TodoItem {...mockProps} />)

    const element = getByText(mockText)
    expect(element).toHaveStyle({ color: "#999" })
  })

  it("should render gray text if checked is true", async () => {
    const { default: TodoItem } = await import(".")

    const { getByText } = render(<TodoItem {...mockProps} checked={true} />)

    const element = getByText(mockText)
    expect(element).toHaveStyle({ color: "#000" })
  })

  it("should call handleOpen if the button was clicked", async () => {
    const { default: TodoItem } = await import(".")

    const { container } = render(<TodoItem {...mockProps} />)

    const button = container.querySelector("button")
    expect(button).toBeDefined()

    if (button) fireEvent.click(button)
    expect(handleOpenSpy).toBeCalledTimes(1)
  })
})
