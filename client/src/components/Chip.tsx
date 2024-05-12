import { PropsWithChildren } from "react";

export const Chip = ({ children }: PropsWithChildren) => {
  return <div className="px-2 py-1 text-xs font-medium bg-gray-100 rounded-md">{children}</div>;
};
