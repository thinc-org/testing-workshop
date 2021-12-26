// thinc-org/SCCU-frontend

import { fireEvent, render, screen } from "@testing-library/react";
import ProjectList from ".";
import { initialProjects } from "../../unit/5-ProjectList/mocks";
import userEvent from "@testing-library/user-event";

const mockInitialProjects = initialProjects;

describe("useProjectList", () => {
  // This is integration so do not try to mock/stub any components if necessary
  let container: any = null;
  beforeEach(() => {
    container = render(<ProjectList initialProjects={mockInitialProjects} />);
  });

  it("Should display projects correctly at initial state", () => {
    const searchBar = screen.getByPlaceholderText("ค้นหาโครงการที่สนใจ...");
    expect(searchBar).toBeInTheDocument();

    const filerImage = screen.getByAltText("Search filter");
    expect(filerImage).toHaveAttribute(
      "src",
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    );

    const filterItem = screen.queryByText("กระทู้ถามสดด้วยวาจา");
    expect(filterItem).toBeNull();

    expect(screen.getAllByText("พิจารณาโครงการ SocietyVCK")).toHaveLength(2);
    expect(screen.getAllByText("โครงการ")).toHaveLength(4);
  });

  it("Should show filter when click on filter button and hide filter when click again", () => {
    const filterButton = screen.getByRole("button");

    expect(screen.queryByText("กระทู้ถามสดด้วยวาจา")).toBeNull();
    expect(screen.queryByText("APPLY")).toBeNull();

    fireEvent.click(filterButton);

    expect(screen.queryByText("กระทู้ถามสดด้วยวาจา")).toBeInTheDocument();
    expect(screen.queryByText("APPLY")).toBeInTheDocument();

    fireEvent.click(filterButton);

    expect(screen.queryByText("กระทู้ถามสดด้วยวาจา")).toBeNull();
    expect(screen.queryByText("APPLY")).toBeNull();

    fireEvent.keyDown(filterButton, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });

    expect(screen.queryByText("กระทู้ถามสดด้วยวาจา")).toBeInTheDocument();
    expect(screen.queryByText("APPLY")).toBeInTheDocument();

    fireEvent.keyDown(filterButton, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });

    expect(screen.queryByText("กระทู้ถามสดด้วยวาจา")).toBeNull();
    expect(screen.queryByText("APPLY")).toBeNull();
  });

  it("Should display filtered projects when type on search textfield", () => {
    const searchBar = screen.getByPlaceholderText("ค้นหาโครงการที่สนใจ...");

    expect(screen.queryAllByText("พิจารณาโครงการ SocietyVCK")).toHaveLength(2);
    expect(screen.queryAllByText("โครงการ")).toHaveLength(4);

    userEvent.type(searchBar, "พิจารณาโครงการ");

    expect(screen.queryAllByText("พิจารณาโครงการ SocietyVCK")).toHaveLength(2);
    expect(screen.queryAllByText("โครงการ")).toHaveLength(0);

    userEvent.type(searchBar, "{selectall}{backspace}โครงการ");

    expect(screen.queryAllByText("พิจารณาโครงการ SocietyVCK")).toHaveLength(2);
    expect(screen.queryAllByText("โครงการ")).toHaveLength(4);

    userEvent.type(searchBar, "{selectall}{backspace}1234");

    expect(screen.queryAllByText("พิจารณาโครงการ SocietyVCK")).toHaveLength(0);
    expect(screen.queryAllByText("โครงการ")).toHaveLength(0);
  });
});

export {};
