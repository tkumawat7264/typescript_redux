import { Stack } from "@mui/material";
import { propsTypes } from "../../types";
import React from "react";

export const ModalBody = ({ children }: propsTypes) => {
  return (
    <Stack
      className="p-4"
      style={{
        flex: 1,
        overflow: "auto",
      }}
    >
      {children}
    </Stack>
  );
};
