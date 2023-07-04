import { Stack } from "@mui/material";
import { propsTypes } from "../../types";
import React from "react";

export const ModalContent = ({ children, ...props }: propsTypes) => {
  return <Stack {...props}>{children}</Stack>;
};
