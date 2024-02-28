import { TokenListProps } from "@/interfaces/tokenList";
import TokenStatsCard from "./TokenCard";

const TokenList = ({ chartData }: TokenListProps) => {
  const atom =
    chartData?.result.data.json[
      "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9"
    ];
  const ntrn = chartData?.result.data.json["untrn"];

  const atomSum =
    (atom?.series?.reduce((a, item) => a + item.value, 0) as number) /
    (atom?.series?.length as number);

  const ntrnSum =
    (ntrn?.series?.reduce((a, item) => a + item.value, 0) as number) /
    (atom?.series?.length as number);

  return (
    <div className="flex w-full justify-center gap-4 mt-10 mb-20">
      <TokenStatsCard
        tokenData={{
          maxValue: ntrn?.maxValue,
          minValue: ntrn?.minValue,
          sumValue: ntrnSum,
          imageSrc: "https://app.astroport.fi/tokens/generated/neutron.svg",
          altText: "NTRN",
          tokenName: "NTRN",
        }}
      />

      <TokenStatsCard
        tokenData={{
          maxValue: atom?.maxValue,
          minValue: atom?.minValue,
          sumValue: atomSum,
          imageSrc: "https://app.astroport.fi/tokens/generated/atom.svg",
          altText: "ATOM",
          tokenName: "ATOM",
        }}
      />
    </div>
  );
};

export default TokenList;
