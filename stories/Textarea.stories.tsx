import React, { useState } from "react";

import Textarea from "./Textarea";

export default {
  title: "Textarea",
  component: Textarea,
  argTypes: {
    disabled: { control: "boolean" },
    hasError: { control: "boolean" },
    placeholder: { control: "text" },
  },
};

export const textarea = (args) => {
  const [text, setText] = useState("");

  return (
    <Textarea onChange={(e) => setText(e.target.value)} text={text} {...args} />
  );
};
