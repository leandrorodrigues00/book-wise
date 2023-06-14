import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  borderWidth?: "sm" | "md";
}

export function Avatar({
  src,
  alt,
  size = "md",
  borderWidth = "sm",
}: AvatarProps) {
  const IMAGE_SIZES = {
    sm: "h-[32px] w-[32px] min-w-[32px]",
    md: "h-[40px] w-[40px] min-w-[40px]",
    lg: "h-[72px] w-[72px] min-w-[72px]",
  };

  const BORDER_SIZE = {
    sm: "p-px",
    md: "p-[2px] ",
  };

  return (
    <div
      className={`rounded-full bg-gradient-vertical ${IMAGE_SIZES[size]} ${BORDER_SIZE[borderWidth]}`}
    >
      <Image
        className="h-full w-full rounded-full object-cover"
        width={80}
        height={80}
        src={src}
        alt={alt}
      />
    </div>
  );
}
