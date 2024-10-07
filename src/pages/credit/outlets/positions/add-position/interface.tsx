import { Assisted } from "@inubekit/assisted";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { Stack } from "@inubekit/stack";
import { useMediaQuery } from "@inubekit/hooks";
import { Button } from "@inubekit/button";

import { PageTitle } from "@components/PageTitle";
import { LoanCondition } from "@components/inputs/LoanConditions";

import { createPositionConfig, stepsAddPosition } from "./config/addPosition.config";
import {
  IFormAddPosition,
  IFormAddPositionRef,
  IStep,
  titleButtonTextAssited,
} from "./types";

import { StyledContainerAssisted } from "./styles";
import { IMessageState } from "../../types/forms.types";

interface AddPositionUIProps {
  currentStep: number;
  steps: IStep[];
  isCurrentFormValid: boolean;
  dataAddPositionLinixForm: IFormAddPosition;
  formReferences: IFormAddPositionRef;
  message: IMessageState;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  handleCloseSectionMessage: () => void;
  handleSubmitClick: () => void;
  currentStepsNumber?: {
    id: number;
    number: number;
    name: string;
    description: string;
  };
}

export function AddPositionUI(props: AddPositionUIProps) {
  const {
    currentStepsNumber,
    handleSubmitClick,
    steps,
    isCurrentFormValid,
    handleNextStep,
    handlePreviousStep,
  } = props;

  const smallScreen = useMediaQuery("(max-width:880px)");
  const disabled = !isCurrentFormValid;

  return (
    <Stack direction="column" padding={smallScreen ? "16px" : "32px 64px"}>
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs crumbs={createPositionConfig[0].crumbs} />
          <Stack justifyContent="space-between" alignItems="center" gap="50px">
            <PageTitle
              title={createPositionConfig[0].title}
              description={createPositionConfig[0].description}
              navigatePage="/credit/positions"
            />
          </Stack>
        </Stack>
        <>
          <StyledContainerAssisted $cursorDisabled={disabled}>
            <Assisted
              step={currentStepsNumber!}
              totalSteps={steps.length}
              onBackClick={handlePreviousStep}
              onNextClick={handleNextStep}
              controls={titleButtonTextAssited}
              onSubmitClick={handleSubmitClick}
            />
          </StyledContainerAssisted>
        </>
        {currentStepsNumber &&
          currentStepsNumber.id === stepsAddPosition.loanConditions.id && (
            <LoanCondition/>
          )}
        <Stack justifyContent="end" gap="20px">
          <Button
            variant="outlined"
            appearance="gray"
            onClick={handlePreviousStep}
            disabled={currentStepsNumber === steps[0]}
          >
            {titleButtonTextAssited.goBackText}
          </Button>
          <Button onClick={handleNextStep}>{currentStepsNumber === steps[7] ? titleButtonTextAssited.submitText : titleButtonTextAssited.goNextText}</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
