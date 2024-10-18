import { useFormik } from "formik";
import { Divider } from "@inubekit/divider";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Toggle } from "@inubekit/toggle";

import { Fieldset } from "@components/data/Fieldset";
import { RadioInput } from "@components/inputs/RadioInput";

import type { IdataForm } from "./types";
import { configSecondStepNewProspescto } from "./config";
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
  isMobile?: boolean;
  onSubmit: (data: IdataForm) => void;
}

export const SecondStepNewPropspect = (props: INewPropspect) => {
  const { data, isMobile = false, onSubmit } = props;

  const formik = useFormik({
    initialValues: {
      selectedCredit: "",
      specialFertilisers: "",
      jointDebtors: "",
      creditSuggestions: false,
    },
    onSubmit: (values) => {
      console.log("values", values);
      onSubmit(values);
    },
  });

  const handleSelectCredit = (creditType: string) => {
    formik.setFieldValue("selectedCredit", creditType);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("creditSuggestions", e.target.checked);
  };

  const handleSpecialFertilisers = (value: string) => {
    formik.setFieldValue("specialFertilisers", value);
  };

  const handleJointDebtors = (value: string) => {
    formik.setFieldValue("jointDebtors", value);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack direction="column" gap="16px">
        <StyledContainer $isMobile={isMobile}>
          {data.credits.map(
            (credit) =>
              credit.userEligible && (
                <Fieldset
                  key={credit.type}
                  title={credit.type}
                  isMobile
                  isClickable
                  isSelected={formik.values.selectedCredit === credit.type}
                  onClick={() => handleSelectCredit(credit.type)}
                >
                  <Stack direction="column" gap="16px" padding="16px">
                    <Stack justifyContent="space-between">
                      <Text appearance="dark" type="label" weight="bold">
                        {configSecondStepNewProspescto.montoMax}
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
                        {configSecondStepNewProspescto.plazoMax}
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
            checked={formik.values.creditSuggestions}
            onChange={handleOnChange}
            name="creditSuggestion"
            children="Prefiere que el sistema se lo sugiera."
            size="large"
          />
        </Stack>
        <StyledContainer>
          <Stack direction="column" gap="16px">
            <Stack direction="column" gap="16px">
              <Text>{configSecondStepNewProspescto.specialFertilisers}</Text>
              <RadioInput
                id="specialFertilisers"
                name="specialFertilisers"
                label="Si"
                value="si"
                checked={formik.values.specialFertilisers === "si"}
                onChange={(valueSpecialFertilisers) => {
                  handleSpecialFertilisers(valueSpecialFertilisers);
                }}
              />
              <RadioInput
                id="specialFertilisers"
                name="specialFertilisers"
                label="No"
                value="no"
                checked={formik.values.specialFertilisers === "no"}
                onChange={(valueSpecialFertilisers) => {
                  handleSpecialFertilisers(valueSpecialFertilisers);
                }}
              />
            </Stack>
            <Divider dashed />
            <Stack direction="column" gap="16px">
              <Text>{configSecondStepNewProspescto.jointDebtors}</Text>
              <RadioInput
                id="jointDebtors"
                name="jointDebtors"
                label="Si"
                value="si"
                checked={formik.values.jointDebtors === "si"}
                onChange={(valueJointDebtors) =>
                  handleJointDebtors(valueJointDebtors)
                }
              />
              <RadioInput
                id="jointDebtors"
                name="jointDebtors"
                label="No"
                value="no"
                checked={formik.values.jointDebtors === "no"}
                onChange={(valueJointDebtors) =>
                  handleJointDebtors(valueJointDebtors)
                }
              />
            </Stack>
          </Stack>
        </StyledContainer>
      </Stack>
    </form>
  );
};
