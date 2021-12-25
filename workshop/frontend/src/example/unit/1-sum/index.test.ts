describe("sum", () => {
  it("should return result of 2 + 2 correctly", async () => {
    const sum = (await import(".")).default

    const result = sum(2, 2)
    expect(result).toBe(4)
  })

  it("should return result of 2 + (-2) correctly", async () => {
    const sum = (await import(".")).default

    const result = sum(2, -2)
    expect(result).toBe(0)
  })

  it("should return result of (-2) + (-2) correctly", async () => {
    const sum = (await import(".")).default

    const result = sum(-2, -2)
    expect(result).toBe(-4)
  })
})

export {}
