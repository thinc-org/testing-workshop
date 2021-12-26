import React from "react";

const ProjectFilterItem: React.FC<{
  type: string;
}> = ({ type }) => (
  <div className="flex items-center">
    <input type="checkbox" className="scale-150 mr-2" />
    <p className="text-[18px]">{type}</p>
  </div>
);

export default ProjectFilterItem;
