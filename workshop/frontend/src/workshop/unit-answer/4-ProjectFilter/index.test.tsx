// thinc-org/SCCU-frontend

import { shallow } from "enzyme";

describe("ProjectFilter", () => {
  it("Should render component correctly", async () => {
    const { default: ProjectFilter } = await import(".");

    const mockTypes = ["type1", "type2", "type3"];
    const wrapper = shallow(<ProjectFilter types={mockTypes} />);

    console.log(wrapper.children(), "wrapper");
    const titleWrapper = wrapper.childAt(0);
    const typesListWrapper = wrapper.childAt(1);
    const applyWrapper = wrapper.childAt(2);

    expect(titleWrapper.text()).toMatch("หัวข้อ");
    expect(typesListWrapper.children().length).toBe(mockTypes.length);
    expect(applyWrapper.text()).toMatch("APPLY");
  });
});

export {};
