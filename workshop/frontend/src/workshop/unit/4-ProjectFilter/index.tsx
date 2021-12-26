import React from "react";
import ProjectFilterItem from "./ProjectFilterItem";

export interface ProjectFilterPropTypes {
  types: string[];
  className: string;
}

const ProjectFilter: React.FC<ProjectFilterPropTypes> = ({
  types,
  className,
}) => (
  <div
    className={`${className} flex flex-col items-center py-2 absolute w-[200px] bg-white drop-shadow-md top-[58px] right-0 rounded-[18px] font-chulacharas font-bold`}
  >
    <p className="text-[22px]">หัวข้อ</p>
    <div>
      {types.map((type) => (
        <ProjectFilterItem key={type} type={type} />
      ))}
    </div>
    <div className="flex justify-center items-center m-1 py-1 w-2/3 bg-black text-white rounded-full cursor-pointer select-none">
      APPLY
    </div>
  </div>
);

export default ProjectFilter;
