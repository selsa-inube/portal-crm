import { Label } from "@inubekit/label";
import { Stack } from "@inubekit/stack";

import { Styledinput } from "./styled";

interface IRadioInputProps {
  id: string;
  name: string;
  checked: boolean;
  label?: string;
  disabled?: boolean;
  onChange: (selected: boolean) => void;
}

export const RadioInput = (props: IRadioInputProps) => {
  const { id, name, label, checked, disabled = false, onChange } = props;

  return (
    <Stack gap="4px">
      <Styledinput
        id={id}
        name={name}
        type="radio"
        checked={checked}
        disabled={disabled}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.checked)
        }
      />

      {label && <Label htmlFor={id}>{label}</Label>}
    </Stack>
  );
};
