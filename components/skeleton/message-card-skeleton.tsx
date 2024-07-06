import React from "react";

type Props = {
  count?: number;
};

const MessageCardSkeleton = ({ count }: Props) => {
  return Array.from({ length: count || 5 }).map((_, index) => (
    <div
      key={index}
      className="relative my-2 h-[84px] w-full animate-pulse overflow-hidden rounded-xl bg-secondary"
    >
      <div
        className="absolute left-0 top-0 h-full w-full"
        style={{ animationDelay: `${index * 0.2}s`, animationDuration: "2s" }}
        data-placeholder
      />
    </div>
  ));
};

export default MessageCardSkeleton;
