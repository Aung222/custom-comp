import clsx from "clsx";

export function Button({
  children,
  color,
  isDisabled,
  variant,
  radius,
  className,
}: {
  children: React.ReactNode;
  color?: string;
  isDisabled?: boolean;
  variant?: string;
  radius?: string;
  className?: string;
}) {
  return (
    <>
      <button
        className={clsx(
          "text-white font-bold py-2 px-4 rounded",className,
          {
            "bg-blue-500": color === "blue",
            "bg-red-500": color === "red",
            "bg-green-500": color === "green",
            "bg-yellow-500": color === "yellow",
            "bg-purple-500": color === "purple",
            "bg-pink-500": color === "pink",
            "bg-gray-500": color === "gray",
            "bg-black": color === "black",
            "bg-white": color === "white",
            "bg-opacity-50": isDisabled,
            
            "bg-transparent border text-blue-500": variant === "bordered",
            "bg-blue-500 text-white": variant === "filled",
            "":variant === "ghost"
          },
          {
            "rounded": radius === "default",
            "rounded-sm": radius === "small",
            "rounded-lg": radius === "large",
            "rounded-md": radius === "medium",
            "rounded-full": radius === "full",
            "rounded-none": radius === "none",
            "rounded-t-lg": radius === "top",
            "rounded-b-lg": radius === "bottom",
            "rounded-l-lg": radius === "left",
            "rounded-r-lg": radius === "right",
            "rounded-tl-lg": radius === "top-left",
            "rounded-tr-lg": radius === "top-right",
            "rounded-bl-lg": radius === "bottom-left",
            "rounded-br-lg": radius === "bottom-right",
            "rounded-tl-none": radius === "top-left-none",
            "rounded-tr-none": radius === "top-right-none",
            "rounded-bl-none": radius === "bottom-left-none",
            "rounded-br-none": radius === "bottom-right-none",
            "rounded-tl-full": radius === "top-left-full",
            "rounded-tr-full": radius === "top-right-full",
            "rounded-bl-full": radius === "bottom-left-full",
            "rounded-br-full": radius === "bottom-right-full",
          },
        )}
      >
        {children}
      </button>
    </>
  );
}
