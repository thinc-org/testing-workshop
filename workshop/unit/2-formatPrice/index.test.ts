describe("formatPrice", () => {
  it.each`
    price      | expected
    ${0}       | ${`฿0`}
    ${12}      | ${`฿12`}
    ${123}     | ${`฿123`}
    ${1234}    | ${`฿1,234`}
    ${12345}   | ${`฿12,345`}
    ${123456}  | ${`฿123,456`}
    ${1234567} | ${`฿1,234,567`}
  `("should format price with no fraction digit if input is $price (integer)", async ({ price, expected }) => {
    const formatPrice = (await import(".")).default

    const result = formatPrice(price)
    expect(result).toBe(expected)
  })

  it.each`
    price          | expected
    ${0.9}         | ${`฿0.90`}
    ${0.91}        | ${`฿0.91`}
    ${0.912}       | ${`฿0.91`}
    ${0.915}       | ${`฿0.92`}
    ${1234567.855} | ${`฿1,234,567.86`}
  `("should format price with 2 fraction digits if input is $price (float)", async ({ price, expected }) => {
    const formatPrice = (await import(".")).default

    const result = formatPrice(price)
    expect(result).toBe(expected)
  })
})
