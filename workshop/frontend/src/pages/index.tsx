import type { NextPage } from "next"
import CardList from "../example/integration/0-CardList"

const initialCards = [
  { text: "card1", description: "desc1" },
  { text: "card2", description: "desc1" },
  { text: "card3", description: "desc1" },
]

const Home: NextPage = () => {
  return (
    <div>
      <CardList initialCards={initialCards} />
    </div>
  )
}

export default Home
