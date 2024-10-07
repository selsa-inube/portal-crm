import { Assisted } from "@inubekit/assisted";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { Stack } from "@inubekit/stack";
import { useMediaQuery } from "@inubekit/hooks";
import { Button } from "@inubekit/button";

import { PageTitle } from "@components/PageTitle";

import { createPositionConfig, buttonText } from "./config/addPosition.config";
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
  showModal: boolean;
  isCurrentFormValid: boolean;
  dataAddPositionLinixForm: IFormAddPosition;
  formReferences: IFormAddPositionRef;
  loading: boolean;
  message: IMessageState;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  handleToggleModal: () => void;
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
        <Stack justifyContent="end" gap="20px">
          <Button
            variant="outlined"
            appearance="gray"
            onClick={handlePreviousStep}
          >
            {buttonText.back}
          </Button>
          <Button onClick={handleNextStep}>{buttonText.next}</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
