import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: ReactNode;
}

export function Input({ icon, className, name, ...props }: InputProps) {
  return (
    <div className={className}>
      <input
        id={name}
        className="flex-1 border-none bg-transparent outline-none  "
        {...props}
      />
      <label htmlFor={name}>{icon}</label>
    </div>
  );
}
