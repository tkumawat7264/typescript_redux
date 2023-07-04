import React from "react";
import {
  FormControl,
  Stack,
  TextField,
} from "@mui/material";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function DatePicker({ formHook, name, views, ...rest }: any) {
  const {
    control,
    formState: { errors },
  } = formHook;
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, onBlur } }) => {
          return (
            <Stack>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <FormControl error={errors?.[name]?.message?.length > 0}>
                  <MuiDatePicker
                    {...rest}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        error={errors?.[name]?.message ? true : false}
                        value={value}
                        onChange={onChange}
                        helperText={errors?.[name]?.message}
                      />
                    )}
                  />
                </FormControl>
              </LocalizationProvider>
            </Stack>
          );
        }}
      />
    </>
  );
}

export default DatePicker;
