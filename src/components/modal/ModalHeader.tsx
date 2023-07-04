import { propsTypes } from "../../types";
import { Stack } from "@mui/material";
import React from "react";

export const ModalHeader = ({ children }: propsTypes) => {
  return (
    <Stack direction="row">
      {children}
    </Stack>
  );
};
