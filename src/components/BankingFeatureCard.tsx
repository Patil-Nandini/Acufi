import React from "react";
import Image from "next/image";

interface BankingFeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: React.ReactNode; // safer than `any`
  imageSrc?: string;
  altText?: string;
}

const BankingFeatureCard: React.FC<BankingFeatureCardProps> = ({
  icon,
  title,
  description,
  imageSrc,
  altText = "",
}) => (
  <div
    className="bg-[#DEEAFF] border border-[#2D6CED] shadow rounded-[40px] p-10 flex flex-col h-[400px] w-[300px] pb-0
    sm:w-[280px] 
    md:w-[280px]  
    lg:w-[290px] xl:w-[340px]"
  >
    {icon && (
      <div className="mb-4 flex items-center justify-center">{icon}</div>
    )}

    <div className="flex-1">
      <h3 className="text-2xl font-semibold text-[#17012C]">{title}</h3>
      <p
        className="mt-2 text-[#0F1720]"
        style={{ fontWeight: 400, fontSize: "18px" }}
      >
        {description}
      </p>
    </div>

    {imageSrc && (
      <div className="flex justify-end">
        <Image
          src={imageSrc}
          alt={altText}
          width={184} 
          height={190}
          className="w-[190px] h-[170px]"
        />
      </div>
    )}
  </div>
);

export default BankingFeatureCard;
