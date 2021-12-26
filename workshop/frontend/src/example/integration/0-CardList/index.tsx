import { Button, Input } from "@mui/material";
import { useState } from "react";
import CardItem from "../../unit/5-CardItem";

interface CardListProps {
  initialCards?: {
    text: string;
    description: string;
  }[];
}

const CardList: React.FC<CardListProps> = ({ initialCards }) => {
  const [cards, setCards] = useState(initialCards || []);
  const [color, setColor] = useState("green");

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleAddCardClick = () => {
    setCards([...cards, { text: "card", description: "desc" }]);
  };

  return (
    <>
      {cards.map((card, index) => (
        <CardItem key={index} {...card} color={color} />
      ))}
      <Input
        inputProps={{
          "aria-label": "card-color-picker",
        }}
        type="color"
        value={color}
        onChange={handleColorChange}
        sx={{ width: "100px" }}
      />
      <Button onClick={handleAddCardClick}>Add Card</Button>
    </>
  );
};

export default CardList;
