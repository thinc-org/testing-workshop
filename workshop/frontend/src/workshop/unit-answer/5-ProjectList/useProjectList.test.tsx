// thinc-org/SCCU-frontend
import { renderHook, act } from "@testing-library/react-hooks";
import { Project } from "./types";
import useProjectList from "./useProjectList";

describe("useProjectList", () => {
  const mockInitialProjects = [
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
  ];

  it("Should render useProjectList correctly and return correct result", () => {
    const { result } = renderHook(() => useProjectList(mockInitialProjects));

    expect(result.current.filterProjectHandler).toBeDefined();
    expect(result.current.projects).toEqual(mockInitialProjects);
  });

  it("Should call filterProjectHandler and filterout query that are not in title", () => {
    const { result } = renderHook(() => useProjectList(mockInitialProjects));

    const mockQuery1 = "Project";
    const mockResult1 = mockInitialProjects;
    act(() => {
      result.current.filterProjectHandler(mockQuery1);
    });
    expect(result.current.projects).toEqual(mockResult1);

    const mockQuery2 = "Project 1";
    const mockResult2 = [
      {
        id: "1",
        title: "Project 1",
        owner: "P New",
      },
    ];
    act(() => {
      result.current.filterProjectHandler(mockQuery2);
    });
    expect(result.current.projects).toEqual(mockResult2);

    const mockQuery3 = "Project 11";
    const mockResult3: Project[] = [];
    act(() => {
      result.current.filterProjectHandler(mockQuery3);
    });
    expect(result.current.projects).toEqual(mockResult3);
  });
});

export {};
