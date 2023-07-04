import * as React from "react";
import { Modal as MuiModal } from "@mui/material";
import { Stack } from "@mui/system";
import { propsTypes } from "../../types";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Modal({ children, ...rest }: propsTypes) {
  return (
    // <MuiModal  {...rest}>
    //   <Stack {...style}>{children}</Stack>
    // </MuiModal>
    <h1>header</h1>
  );
}
