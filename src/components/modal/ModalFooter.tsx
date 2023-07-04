import { Stack } from "@mui/material";
import { propsTypes } from "../../types";
import React from "react";

export const ModalFooter = ({ children }: propsTypes) => {
  return (
    <Stack
      direction="row"
      style={{
        boxShadow: "0px -4px 10px #00000020",
      }}
    >
      {children}
    </Stack>
  );
};
