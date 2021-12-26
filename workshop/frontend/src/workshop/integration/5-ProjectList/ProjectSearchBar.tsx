import React, { useState } from "react";
import Image from "next/image";
import ProjectFilter from "./ProjectFilter";

const ProjectSearchBar: React.FC<{ onChangeHandler: (query: string) => void }> =
  ({ onChangeHandler }) => {
    const [showFilter, setShowFilter] = useState<boolean>(false);
    const toggleFilter = () => {
      setShowFilter((prev) => !prev);
    };

    return (
      <div className="flex justify-between items-center relative w-full mb-4 space-x-4">
        <input
          className="w-full h-[48px] px-6 font-chulacharas font-bold text-[20px] border-black border-2 rounded-full"
          type="text"
          placeholder="ค้นหาโครงการที่สนใจ..."
          onChange={(event) => {
            onChangeHandler(event?.target.value);
          }}
        />
        <div
          className="flex justify-center items-center h-[48px] min-w-[48px] border-black border-2 rounded-xl cursor-pointer"
          role="button"
          tabIndex={0}
          onClick={toggleFilter}
          onKeyDown={toggleFilter}
        >
          <Image src="/images/icons/filter.svg" width={30} height={30} />
        </div>
        {showFilter && <ProjectFilter />}
      </div>
    );
  };

export default ProjectSearchBar;
