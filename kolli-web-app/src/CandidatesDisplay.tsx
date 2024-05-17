import { calculateColliDistributions } from "calculateColliDistributions";
import { CandidateDisplay } from "CandidateDisplay";
import { zip } from "helpers";
import React from "react";

export function CandidatesDisplay({
  productsAvailable,
  kolliRange,
}: {
  productsAvailable: [string, number][];
  kolliRange: [number, number];
}) {
  try {
    return (
      <div className="flex gap-2">
        {calculateColliDistributions(
          productsAvailable.map(([_, amount]) => amount) as [
            number,
            ...number[],
          ],
          kolliRange[0],
          kolliRange[1],
        ).map(({ nrOfCollis, colliDistribution }, index) => {
          const productsLager = productsAvailable.map(([name, total]) => ({
            name,
            total,
          }));

          const products = zip(colliDistribution, productsLager).map(
            ([inColli, { name, total }]) => {
              const sold = inColli * nrOfCollis;
              const unsold = total - sold;

              return { name, inColli, sold, unsold };
            },
          );

          return (
            <CandidateDisplay
              key={index}
              nrOfCollis={nrOfCollis}
              products={products}
            />
          );
        })}
      </div>
    );
  } catch (error) {
    // @ts-ignore
    return <div>{error.message}</div>;
  }
}
