import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormikProps } from "formik";

import { IMessageState } from "@pages/credit/outlets/types/forms.types";

import { IGeneralInformationEntry } from "../components/GeneralInformationForm";
import { stepsAddPosition } from "./config/addPosition.config";
import { IFormAddPosition, IFormAddPositionRef } from "./types";
import { initalValuesPositions } from "./config/initialValues";
import { addPositionStepsRules } from "./utils";
import { AddPositionUI } from "./interface";
import { Consulting } from "@components/modal/Consulting";

export function AddPosition() {
  const [currentStep, setCurrentStep] = useState<number>(
    stepsAddPosition.generalInformation.id
  );
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(true);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });
  const [showConsultingModal, setShowConsultingModal] = useState(false);

  const steps = Object.values(stepsAddPosition);
  const navigate = useNavigate();

  const currentStepsNumber = steps.find(
    (step: { number: number }) => step.number === currentStep
  );

  const [dataAddPositionLinixForm, setDataAddPositionLinixForm] =
    useState<IFormAddPosition>({
      generalInformation: {
        isValid: false,
        values: initalValuesPositions.generalInformation,
      },
    });

  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationEntry>>(null);

  const formReferences: IFormAddPositionRef = {
    generalInformation: generalInformationRef,
  };

  const handleStepChange = (stepId: number) => {
    const newAddPosition = addPositionStepsRules(
      currentStep,
      dataAddPositionLinixForm,
      formReferences,
      isCurrentFormValid
    );

    setDataAddPositionLinixForm(newAddPosition);

    const changeStepKey = Object.entries(stepsAddPosition).find(
      ([, config]) => config.id === currentStep
    )?.[0];

    if (!changeStepKey) return;

    const changeIsVerification = stepId === steps.length;

    setIsCurrentFormValid(
      changeIsVerification ||
        newAddPosition[changeStepKey as keyof IFormAddPosition]?.isValid ||
        true
    );

    setCurrentStep(stepId);

    document.getElementsByTagName("main")[0].scrollTo(0, 0);
  };

  const handleNextStep = () => {
    if (currentStep === steps.length) {
      handleSubmitClick();
    }
    if (currentStep === stepsAddPosition.loanConditions.id) {
      showConsultingForFiveSeconds();
    }
    if (currentStep + 1 <= steps.length && isCurrentFormValid) {
      handleStepChange(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    handleStepChange(currentStep - 1);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
    navigate("/credit/positions");
  };

  function handleSubmitClick() {
    console.log("Enviar paso: ", currentStep);
  }

  const showConsultingForFiveSeconds = () => {
    setShowConsultingModal(true);
    setTimeout(() => {
      setShowConsultingModal(false);
    }, 2000);
  };

  return (
    <>
    <AddPositionUI
      steps={steps}
      currentStep={currentStep}
      isCurrentFormValid={isCurrentFormValid}
      dataAddPositionLinixForm={dataAddPositionLinixForm}
      formReferences={formReferences}
      message={message}
      setIsCurrentFormValid={setIsCurrentFormValid}
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
      setCurrentStep={setCurrentStep}
      handleCloseSectionMessage={handleCloseSectionMessage}
      currentStepsNumber={currentStepsNumber}
      handleSubmitClick={handleSubmitClick}
    />
    {showConsultingModal && <Consulting/>}
    </>
  );
}
