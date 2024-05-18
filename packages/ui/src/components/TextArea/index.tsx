"use client";

import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
} as const;
const variants = {
  tarOutlineBluegray100: "border-blue_gray-100 border border-solid",
} as const;
const sizes = {
  xs: "h-[150px] p-[22px] text-sm",
  sm: "h-[218px] p-4 text-sm",
} as const;

type TextAreaProps = Omit<
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      shape = "square",
      size = "sm",
      variant = "tarOutlineBluegray100",
      onChange,
      ...restProps
    },
    ref
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className} ${shapes[shape] || ""} ${sizes[size] || ""} ${variants[variant] || ""}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  }
);

export { TextArea };
