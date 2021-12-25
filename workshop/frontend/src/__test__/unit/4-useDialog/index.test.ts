import { renderHook, act } from "@testing-library/react-hooks"

describe("useDialog", () => {
  const mockTitle = "title"
  const mockContent = "content"

  it("should return title and content same as input", async () => {
    const { default: useDialog } = await import(".")
    const { result } = renderHook(() => useDialog(mockTitle, mockContent))
    expect(result.current.title).toBe(mockTitle)
    expect(result.current.content).toBe(mockContent)
  })

  it("should set open to true if handleOpen was triggered", async () => {
    const { default: useDialog } = await import(".")
    const { result } = renderHook(() => useDialog(mockTitle, mockContent))

    act(() => {
      result.current.handleOpen()
    })

    expect(result.current.open).toBe(true)
  })

  it("should set open to false if handleClose was triggered", async () => {
    const { default: useDialog } = await import(".")
    const { result } = renderHook(() => useDialog(mockTitle, mockContent))

    act(() => {
      result.current.handleClose()
    })

    expect(result.current.open).toBe(false)
  })
})
