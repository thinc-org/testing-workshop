import React, { useState } from "react";
import ProjectSearchBar from "./ProjectSearchBar";
import ProjectItem from "./ProjectItem";
import { Project } from "./types";

export interface ProjectListPropsType {
  initialProjects: Project[];
}

const ProjectList: React.FC<ProjectListPropsType> = ({ initialProjects }) => {
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
