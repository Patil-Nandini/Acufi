import React from 'react';

interface BankingFeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  imageSrc?: string;
  altText?: string;
}

const BankingFeatureCard: React.FC<BankingFeatureCardProps> = ({
  icon,
  title,
  description,
  imageSrc,
  altText
}) => (
  <div className="bg-[#DEEAFF] border border-[#2D6CED] shadow rounded-[40px] p-8 flex flex-col h-full w-[320px]">
    {icon && (
      <div className="mb-4 flex items-center justify-center">
        {icon}
      </div>
    )}
    <div className="flex-1">
   <h3 className="text-2xl font-semibold text-[#17012C]">{title}</h3>
      <p className="mt-2 text-#0F1720-700">{description}</p>
    </div>
    {imageSrc && (
      <div className="mt-8 flex justify-end">
        <img
          src={imageSrc}
          alt={altText}
          className="w-36 h-auto object-contain"
        />
      </div>
    )}
  </div>
);

export default BankingFeatureCard;