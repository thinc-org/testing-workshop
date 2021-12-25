import { Typography } from "@mui/material"

interface CardItemProps {
  text: string
  description: string
  color: string
}

const CardItem: React.FC<CardItemProps> = ({ text, description, color }) => {
  return (
    <div style={{ padding: "10px", border: "1px solid black", background: color }}>
      <Typography variant="h1">{text}</Typography>
      <Typography variant="body1">{description}</Typography>
    </div>
  )
}

export default CardItem
