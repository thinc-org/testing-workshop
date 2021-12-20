export default function formatPrice(price: number): string {
  const isInteger = price % 1 === 0
  const fractionDigits = isInteger ? 0 : 2

  const result = new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(price)

  return result
}
