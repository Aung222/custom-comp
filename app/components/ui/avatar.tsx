import clsx from "clsx";
import Image from "next/image";
export function Avatar({
  isBordered,
  size,
  src,
  className,
}: {
  isBordered?: boolean;
  size?: "sm" | "md" | "lg";
  src?: string;
  className?: string;
}) {
  return (
    <div className="inline-block rounded-full overflow-hidden">
      <Image
        alt="Avatar"
        width={150}
        height={150}
        src={src || "https://i.pravatar.cc/150?u=a04258114e29026708c"}
        className={clsx(className, {
          "w-10 h-10": size === "sm",
          "w-20 h-20": size === "md",
          "w-40 h-40": size === "lg",
          "border-2 p-px rounded-full": isBordered,
        })}
      />
    </div>
  );
}

export function AvatarGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center -space-x-5">{children}</div>;
}
