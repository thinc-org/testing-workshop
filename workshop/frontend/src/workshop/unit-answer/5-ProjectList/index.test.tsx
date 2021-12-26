// thinc-org/SCCU-frontend

import { shallow } from "enzyme";
import ProjectSearchBar from "./ProjectSearchBar";
import ProjectItem from "./ProjectItem";

describe("ProjectList", () => {
  // Hint: Try to seperate ProjectList into 2 functions
  // 1. useProjectList
  // 2. ProjectList that use useProjectList
  // Then test each file individually as index.test.tsx, useProjectList.test.tsx

  const mockInitialProject = [
    {
      id: "1",
      title: "Project 1",
      owner: "P New",
    },
    {
      id: "2",
      title: "Project 2",
      owner: "P Yu",
    },
    {
      id: "3",
      title: "Project 3",
      owner: "P Yu",
    },
  ];

  const mockProject = [
    {
      id: "1",
      title: "Project 1",
      owner: "P New",
    },
    {
      id: "3",
      title: "Project 3",
      owner: "P Yu",
    },
  ];

  const filterProjectHandlerSpy = jest.fn();
  const useProjectListSpy = jest.fn().mockReturnValue({
    filterProjectHandler: filterProjectHandlerSpy,
    projects: mockProject,
  });
  jest.doMock("./useProjectList", () => useProjectListSpy);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should render component correctly", async () => {
    const { default: ProjectList } = await import(".");
    const wrapper = shallow(
      <ProjectList initialProjects={mockInitialProject} />
    );
    console.log("test1");
    expect(wrapper.find(ProjectSearchBar).prop("onChangeHandler")).toBe(
      filterProjectHandlerSpy
    );
    console.log("test2");
    expect(wrapper.find(ProjectItem).length).toBe(mockProject.length);
    console.log("test3");
  });
});

export {};
