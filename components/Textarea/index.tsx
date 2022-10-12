import React from "react";

import "./styles.styl";

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

Textarea.defaultProps = defaultProps;

export default Textarea;
