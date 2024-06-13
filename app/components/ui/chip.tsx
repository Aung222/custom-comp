import clsx from "clsx";
import { CircleX } from "lucide-react";

export default function Chip({
  children,
  color,
  startIcon,
  endIcon,
  onClose,
}: {
  children: React.ReactNode;
  color?: string;
  startIcon?: any;
  endIcon?: any;
  onClose?: () => void;
}) {
  return (
    <span
      className={clsx("rounded flex w-fit p-2", {
        "bg-blue-500": color === "blue",
        "bg-gray-500": color === "gray",
      })}
    >
      {startIcon && startIcon}
      {children} <CircleX className="ps-2" onClick={onClose} />
      {endIcon && endIcon}
    </span>
  );
}
