import React, { useState } from "react";
import ProjectSearchBar from "./ProjectSearchBar";
import ProjectItem from "./ProjectItem";

const ProjectList: React.FC = () => {
  const initialProjects = [
    { id: "1", title: "พิจารณาโครงการ SocietyVCK", owner: "สภานิสิต" },
    { id: "2", title: "พิจารณาโครงการ SocietyVCK", owner: "สภานิสิต" },
    { id: "3", title: "โครงการ", owner: "กมธ. [ฝ่าย]" },
    { id: "4", title: "โครงการ", owner: "กมธ. [ฝ่าย]" },
    { id: "5", title: "โครงการ", owner: "กมธ. [ฝ่าย]" },
    { id: "6", title: "โครงการ", owner: "กมธ. [ฝ่าย]" },
  ];

  const [projects, setProjects] =
    useState<{ id: string; title: string; owner: string }[]>(initialProjects);

  const filterProjectHandler = (query: string) => {
    setProjects(
      initialProjects.filter((project) => project.title.includes(query))
    );
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center w-[90%] space-y-[14px] my-8 text-[#222224]">
        <ProjectSearchBar onChangeHandler={filterProjectHandler} />
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            id={project.id}
            title={project.title}
            owner={project.owner}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
