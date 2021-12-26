import { useState } from "react";
import { Project } from "./types";

const useProjectList = (initialProjects: Project[]) => {
  const [projects, setProjects] =
    useState<{ id: string; title: string; owner: string }[]>(initialProjects);

  const filterProjectHandler = (query: string) => {
    setProjects(
      initialProjects.filter((project) => project.title.includes(query))
    );
  };

  return { filterProjectHandler, projects };
};

export default useProjectList;
