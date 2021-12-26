import type { NextPage } from "next"
import ProjectList from "../workshop/integration/5-ProjectList"
import ProjectFilter from "../workshop/unit/4-ProjectFilter"

const initialCards = [
  { text: "card1", description: "desc1" },
  { text: "card2", description: "desc1" },
  { text: "card3", description: "desc1" },
]

const Home: NextPage = () => {
  return (
    <div>
        <ProjectList/>
        <ProjectFilter/>
    </div>
  )
}

export default Home
