import React from "react";
import { Input } from "./Input";

export default function LoginForm({ formHook, onSubmit }: any) {
  const { handleSubmit } = formHook;
  return (
    <form>
      <Input name="email" formHook={formHook} />
      <Input name="password" type="password" formHook={formHook} />
      <button type="submit" onClick={handleSubmit(onSubmit)}>
        submit
      </button>
    </form>
  );
}
