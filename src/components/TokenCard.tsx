import React from "react";
import { AiOutlineStock, AiOutlineFall, AiOutlineDash } from "react-icons/ai";
import Image from "next/image";
import { StatCardProps, TokenStatsCardProps } from "@/interfaces/tokenCard";

const TokenStatsCard = ({ tokenData }: TokenStatsCardProps) => {
  const { maxValue, minValue, sumValue, imageSrc, altText, tokenName } =
    tokenData;

  return (
    <div className="flex flex-col p-4 bg-white border border-gray-300 shadow-md rounded-md w-[21.875rem]">
      <div className="flex mb-4 w-full items-center gap-4">
        <Image src={imageSrc} alt={altText} width={32} height={32} />
        <span className="text-lg font-semibold">{tokenName}</span>
      </div>
      <StatCard
        icon={<AiOutlineStock size={"1.5rem"} />}
        label="Max Price"
        value={`$${maxValue}`}
      />
      <StatCard
        icon={<AiOutlineFall size={"1.5rem"} />}
        label="MIN"
        value={`$${minValue}`}
      />
      <StatCard
        icon={<AiOutlineDash size={"1.5rem"} />}
        label="AVERAGE"
        value={`$${sumValue?.toFixed(2)}`}
      />
    </div>
  );
};

const StatCard = ({ icon, label, value }: StatCardProps) => (
  <div className="border-2 rounded-full mb-2 flex gap-3 justify-between items-center p-2">
    <div className="flex gap-1 justify-center items-center">
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
        {label}
      </span>
      {icon}
    </div>
    <span className="text-2xl font-semibold">{value}</span>
  </div>
);

export default TokenStatsCard;
