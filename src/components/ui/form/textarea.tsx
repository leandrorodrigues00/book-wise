import { TextareaHTMLAttributes } from "react";

import { cn } from "@/utils/tailwind-classnames";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  maxLength?: number;
}

export function Textarea({ className, maxLength, ...props }: TextareaProps) {
  const valueLength = String(props.value)?.length ?? 0;

  return (
    <div className={cn("flex w-full flex-col transition-all", className)}>
      <textarea
        id={props.name}
        {...props}
        className="flex-1 resize-none border-none bg-transparent px-5 py-[14px] outline-none placeholder:text-gray-400"
      />
      {maxLength && (
        <span
          className={cn(
            "ml-auto pb-1 pr-2 text-xs leading-base",
            valueLength > 450 ? "text-red-300" : "text-gray-400"
          )}
        >
          {valueLength}/{maxLength}
        </span>
      )}
    </div>
  );
}
