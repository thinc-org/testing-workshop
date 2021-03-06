import type { NextPage } from "next";
import ProjectList from "../workshop/integration/5-ProjectList";
import ProjectFilter from "../workshop/unit/4-ProjectFilter";
import { initialProjects } from "../workshop/integration/5-ProjectList/mocks";
import { mockTypes } from "../workshop/unit/4-ProjectFilter/mocks";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      ------------------------------------------------- Project List - For
      Integration test
      <div>
        <ProjectList initialProjects={initialProjects} />
      </div>
      ------------------------------------------------- ProjectFilter - For
      refernece
      <ProjectFilter className="relative" types={mockTypes} />
    </div>
  );
};

export default Home;
