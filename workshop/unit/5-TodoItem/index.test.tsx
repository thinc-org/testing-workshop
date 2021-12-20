import { fireEvent, render } from "@testing-library/react"

describe("TodoItem", () => {
  const mockText = "text"
  const mockChecked = false
  const onChangeSpy = jest.fn()

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

    const { container } = render(<TodoItem text={mockText} checked={mockChecked} onChange={onChangeSpy} />)
    expect(container).toMatchSnapshot()
  })

  it("should render black text if checked is true", async () => {
    const { default: TodoItem } = await import(".")

    const { getByText } = render(<TodoItem text={mockText} checked={mockChecked} onChange={onChangeSpy} />)

    const element = getByText(mockText)
    expect(element).toHaveStyle({ color: "#000" })
  })

  it("should render gray text if checked is false", async () => {
    const { default: TodoItem } = await import(".")

    const { getByText } = render(<TodoItem text={mockText} checked={mockChecked} onChange={onChangeSpy} />)

    const element = getByText(mockText)
    expect(element).toHaveStyle({ color: "#999" })
  })

  it("should call handleOpen if the button was clicked", async () => {
    const { default: TodoItem } = await import(".")

    const { container } = render(<TodoItem text={mockText} checked={mockChecked} onChange={onChangeSpy} />)

    const button = container.querySelector("button")
    expect(button).toBeDefined()

    if (button) fireEvent.click(button)
    expect(handleOpenSpy).toBeCalledTimes(1)
  })
})
