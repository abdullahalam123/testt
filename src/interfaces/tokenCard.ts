export interface TokenStatsCardProps {
  tokenData: {
    maxValue?: number;
    minValue?: number;
    sumValue?: number;
    imageSrc: string;
    altText: string;
    tokenName: string;
  };
}

export interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value?: string | number;
}
