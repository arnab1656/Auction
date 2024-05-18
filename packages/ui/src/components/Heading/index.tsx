"use client";

import React from "react";

const sizes = {
  "3xl": "text-[25px] font-semibold",
  "2xl": "text-[22px] font-semibold",
  xl: "text-xl font-semibold",
  "4xl": "text-[28px] font-semibold",
  s: "text-base font-bold",
  md: "text-[17px] font-semibold",
  xs: "text-[15px] font-bold",
  lg: "text-lg font-semibold",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "2xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-blue_gray-900 font-inter ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
