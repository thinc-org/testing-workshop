import type { NextPage } from "next";
import ProjectList from "../workshop/integration/5-ProjectList";
import ProjectFilter from "../workshop/unit/4-ProjectFilter";

const Home: NextPage = () => {
  return (
    <div>
      <ProjectList />
      <ProjectFilter />
    </div>
  );
};

export default Home;
