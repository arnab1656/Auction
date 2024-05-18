"use client";

import React from "react";
import "../../style/globals.css";

import { ErrorMessage } from "../../components/ErrorMessage";

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    wrapClassName: string;
    className: string;
    name: string;
    placeholder: string;
    type: string;
    errors: string[];
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    value: number;
  }>;

// const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
//   console.log(e.target.value);
// };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapClassName,
      className,
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label,
      prefix,
      suffix,
      onChange,
      shape,
      size,
      variant,
      color = "",
      value,
      ...restProps
    },
    ref
  ) => {
    return (
      // <div>
      <div className={wrapClassName} ref={ref}>
        {!!label && label}
        {!!prefix && prefix}
        <input
          // ref={ref}
          className={className}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
        />
        {!!suffix && suffix}

        {/* Using the child element */}

        {children}
      </div>
      // {/* {!!errors && <ErrorMessage errors={errors} />} */}
      // </div>
    );
  }
);

export { Input };
