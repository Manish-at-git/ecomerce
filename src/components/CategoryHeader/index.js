import React from "react";

const CategoryHeader = ({title, subTitle}) => {
  return (
    <div>
      <div className="flex items-center gap-5 font-semibold text-[#DB4444] mb-3">
        <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
        <p>{subTitle}</p>
      </div>
      <div className="text-[36px] font-semibold mb-6">{title}</div>
    </div>
  );
};

export default CategoryHeader;
