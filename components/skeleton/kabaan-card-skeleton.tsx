import React from "react";

type Props = {
  count?: number;
};

const KabaanCardSkeleton = ({ count }: Props) => {
  return Array.from({ length: count || 5 }).map((_, index) => (
    <div
      key={index}
      data-scale
      style={{ animationDelay: `${index * 0.2}s` }}
      className="relative my-2 h-[84px] w-full animate-pulse overflow-hidden rounded-md bg-neutral-800/70"
    >
      <div
        className="absolute left-0 top-0 h-full w-full"
        style={{ animationDelay: `${index * 0.2}s` }}
        data-placeholder
      />
    </div>
  ));
};

export default KabaanCardSkeleton;
