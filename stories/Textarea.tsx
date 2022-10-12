import React from "react";
import "./textarea.styl";

type TextareaProps = {
  className: string;
  dataQa: string;
  hasError: boolean;
} & typeof defaultProps;

const defaultProps = {
  className: "",
  dataQa: "",
  hasError: false,
};

const Textarea = ({ className, dataQa, hasError, ...props }: TextareaProps) => (
  <textarea
    className={`textarea ${className} textarea--error-${hasError}`}
    data-qa={dataQa}
    {...props}
  />
);

export default Textarea;
