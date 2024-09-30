import { useState } from "react";
import { Label } from "@inubekit/label";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Toggle } from "@inubekit/toggle";

import { Fieldset } from "@components/data/Fieldset";
import { StyledContainer } from "./styles";
import { Divider } from "@inubekit/divider";

interface IData {
  credits: {
    type: string;
    maxAmount: number;
    maxRate: string;
    maxTerm: string;
    userEligible: boolean;
  }[];
}

interface INewPropspect {
  data: IData;
}

export const NewPropspect = (props: INewPropspect) => {
  const { data } = props;

  const [isSelected] = useState(false);

  const [onChanged, setOnChanged] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOnChanged(e.target.checked);
  };

  return (
    <Stack>
      <StyledContainer>
        {data.credits.map(
          (credit) =>
            credit.userEligible && (
              <Fieldset
                key={credit.type}
                title={credit.type}
                isMobile={false}
                isClickable={isSelected}
              >
                <Stack direction="column" gap="16px" padding="16px">
                  <Stack justifyContent="space-between">
                    <Text appearance="dark" type="label" weight="bold">
                      Monto máx.
                    </Text>
                    <Text appearance="gray" size="medium">
                      <Text
                        as="span"
                        appearance="primary"
                        size="small"
                        weight="bold"
                      >
                        ${" "}
                      </Text>
                      {credit.maxAmount}
                    </Text>
                  </Stack>
                  <Stack justifyContent="space-between">
                    <Text appearance="dark" type="label" weight="bold">
                      Tasa máx.
                    </Text>
                    <Text appearance="gray" size="medium">
                      {credit.maxRate}
                    </Text>
                  </Stack>
                  <Stack justifyContent="space-between">
                    <Text appearance="dark" type="label" weight="bold">
                      Plazo máx.
                    </Text>
                    <Text appearance="gray" size="medium">
                      {credit.maxTerm}
                    </Text>
                  </Stack>
                </Stack>
              </Fieldset>
            )
        )}
      </StyledContainer>
      <Stack>
        <Toggle
          checked={onChanged}
          onChange={handleOnChange}
          name="credit-suggestion"
        />
        <Label htmlFor="credit-suggestion">
          Prefiere que el sistema se lo sugiera.
        </Label>
      </Stack>
      <Stack>
        <Stack>
          <Label>
            ¿Quiere programar abonos especiales a capital para disminuir su pago
            ordinario o recortar plazo?
          </Label>
        </Stack>
        <Divider />
        <Stack>
          <Label>¿Quiere agregar deudores solidarios?</Label>
        </Stack>
      </Stack>
    </Stack>
  );
};
