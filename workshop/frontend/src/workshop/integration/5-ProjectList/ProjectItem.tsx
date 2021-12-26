import React from "react";
import Link from "next/link";

const ProjectItem: React.FC<{ id: string; title: string; owner: string }> = ({
  id,
  title,
  owner,
}) => {
  const backgroundGradient =
    owner === "สภานิสิต"
      ? "bg-gradient-to-r from-[#FC93A6] to-[#FFC3D7]"
      : "bg-gradient-to-r from-[#FFA496] via-[#FFA2CB] to-[#F9AEC2]";
  return (
    <Link href={`/project/${id}`} passHref>
      <div
        className={`flex justify-between items-center w-full py-2 px-6 rounded-3xl font-chulacharas font-bold text-[20px] cursor-pointer ${backgroundGradient}`}
      >
        <p>{title}</p>
        <p className="min-w-[100px] text-right">{owner}</p>
      </div>
    </Link>
  );
};

export default ProjectItem;
