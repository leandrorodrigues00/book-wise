"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/utils/tailwind-classnames";

type RootElement = React.ElementRef<typeof AvatarPrimitive.Root>;
type RootProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;

type ImageElement = React.ElementRef<typeof AvatarPrimitive.Image>;
type ImageProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;

type FallbackElement = React.ElementRef<typeof AvatarPrimitive.Fallback>;
type FallbackProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Fallback
>;

const Avatar = React.forwardRef<RootElement, RootProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 overflow-hidden rounded-full bg-gradient-vertical p-[1px]",
        className
      )}
      {...props}
    />
  )
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<ImageElement, ImageProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
      ref={ref}
      className={cn("h-full w-full rounded-full object-cover", className)}
      {...props}
    />
  )
);
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<FallbackElement, FallbackProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
);
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
