"use client";

import React from "react";

const sizeClasses = {
  txtManropeExtraBold54: "font-extrabold font-manrope",
  txtManropeSemiBold16: "font-manrope font-semibold",
  txtManropeSemiBold16Gray700: "font-manrope font-semibold",
  txtManropeSemiBold18: "font-manrope font-semibold",
  txtManropeBold24: "font-bold font-manrope",
  txtManropeSemiBold12: "font-manrope font-semibold",
  txtManropeBold18Gray600: "font-bold font-manrope",
  txtManropeRegular18: "font-manrope font-normal",
  txtManropeExtraBold28: "font-extrabold font-manrope",
  txtManropeSemiBold20: "font-manrope font-semibold",
  txtMarkoOneRegular20: "font-markoone font-normal",
  txtManropeBold18: "font-bold font-manrope",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className,
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  console.log("className for text");
  console.log(className);

  console.log("ihihioj");
  console.log(`${size && sizeClasses[size]}`);

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
