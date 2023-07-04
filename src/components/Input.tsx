import { FC } from "react";
import { TextField, Stack } from "@mui/material";
import { FormHelperText } from "@mui/material";
import { Controller, UseFormReturn } from "react-hook-form";
export interface TextFieldProps {
  formHook: UseFormReturn<any>;
  name: string;
  type?: string;
}

export const Input: FC<TextFieldProps> = ({
  formHook,
  type,
  name,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = formHook;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Stack>
          <TextField
            onChange={onChange}
            onBlur={onBlur}
            value={formHook?.getValues(name) || ''}
            type={type}
            // error={(errors as any)[name]?.message?.length > 0}
            // helperText={errors?.[name]?.message?.toString()}
            {...props}
          />
          <FormHelperText error id="my-helper-text">
            {errors?.[name]?.message?.toString()}
          </FormHelperText>
        </Stack>
      )}
    />
  );
};
