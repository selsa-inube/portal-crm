import { Label } from "@inubekit/label";
import { Stack } from "@inubekit/stack";

import { Styledinput } from "./styled";
import React from "react";

interface IRadioInputProps {
  id: string;
  name: string;
  checked: boolean;
  value: string;
  label?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export const RadioInput = (props: IRadioInputProps) => {
  const { id, name, value, label, checked, disabled = false, onChange } = props;

  return (
    <Stack gap="4px">
      <Styledinput
        id={id}
        name={name}
        type="radio"
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />

      {label && <Label htmlFor={id}>{label}</Label>}
    </Stack>
  );
};
