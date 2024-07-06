import React from "react";

type Props = {
  count?: number;
};

const AddressSkeleton = ({ count }: Props) => {
  return (
    <div className="relative my-2 h-10 w-full animate-pulse overflow-hidden rounded-xl bg-secondary">
      <div data-placeholder className="absolute left-0 top-0 h-full w-full" />
    </div>
  );
};

export default AddressSkeleton;
