import Image, { ImageProps } from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  borderWidth?: 1 | 2;
}

export function Avatar({
  src,
  alt,
  size = "md",
  borderWidth = 1,
}: AvatarProps) {
  const IMAGE_SIZES = {
    sm: {
      width: 32,
      height: 32,
    },
    md: {
      width: 40,
      height: 40,
    },
    lg: {
      width: 72,
      height: 72,
    },
  };
  return (
    <div className={`p-[${borderWidth}px] bg-gradient-vertical rounded-full`}>
      <Image
        className="rounded-full"
        width={IMAGE_SIZES[size].width}
        height={IMAGE_SIZES[size].height}
        src={src}
        alt={`foto de perfil de ${alt}`}
      />
    </div>
  );
}
