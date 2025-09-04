"use client";

import React from "react";

type TechFeatureItemProps = {
  number?: number | string;
  name: string;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string; 
};

const TechFeatureItem: React.FC<TechFeatureItemProps> = ({
  number,
  name,
  icon,
  style,
  className,
}) => (
  <div
    className={
      [
        "relative flex items-center space-x-4 pl-4 py-4 shadow-sm mb-6",
        "rounded-[24px] min-w-[230px] max-w-[230px] h-[70px]",
        className
      ].filter(Boolean).join(" ")
    }
    style={{
      background:
        "linear-gradient(180deg, #DFDFDF 0%, #F5F5F5 3.48%, #F5F5F5 94.59%, #BCBCBC 105.96%)",
      border: "1px solid #2D6CED",
      ...style,
    }}
  >
    <span className="absolute" style={{ top: "11px", right: "-6px" }}>
      <img
        src="/curve.png"
        alt="Decorative curve"
        className="w-8 h-5"
      />
    </span>

    <div className="flex items-center justify-center w-10 h-10 bg-white rounded-[11px] text-[#2D6CED] border border-[#DEEAFF] shadow text-2xl font-bold">
      {icon ? icon : <span>{number}</span>}
    </div>

    <span className="text-[#0F1720] font-semibold text-xl">{name}</span>
  </div>
);

export default TechFeatureItem;
function clsx(arg0: string, arg1: string, className: string | undefined): string | undefined {
  throw new Error("Function not implemented.");
}

