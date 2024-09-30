import { useState } from "react";
import { Divider } from "@inubekit/divider";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Toggle } from "@inubekit/toggle";

import { Fieldset } from "@components/data/Fieldset";
import { RadioInput } from "@components/inputs/RadioInput";
import { StyledContainer } from "./styles";

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

  const [checkedToggle, setCheckedToggle] = useState(false);

  const [checkedSpecialFertilisers, setCheckedSpecialFertilisers] =
    useState(false);
  //const [checkedSolidarityDebtors, setCheckedSolidarityDebtors] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedToggle(e.target.checked);
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
          checked={checkedToggle}
          onChange={handleOnChange}
          name="credit-suggestion"
          children="Prefiere que el sistema se lo sugiera."
        />
      </Stack>
      <Stack>
        <Stack>
          <Text>
            ¿Quiere programar abonos especiales a capital para disminuir su pago
            ordinario o recortar plazo?
          </Text>
          <RadioInput
            id="special-fertilisers"
            name="special-fertilisers"
            checked={checkedSpecialFertilisers}
            onChange={() =>
              setCheckedSpecialFertilisers(!checkedSpecialFertilisers)
            }
          />
        </Stack>
        <Divider />
        <Stack>
          <Text>¿Quiere agregar deudores solidarios?</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
