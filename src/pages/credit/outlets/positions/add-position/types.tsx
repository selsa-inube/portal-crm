import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "../components/GeneralInformationForm";
import React from "react";

export const titleButtonTextAssited = {
  goBackText: "Anterior",
  goNextText: "Siguiente",
  submitText: "Enviar",
};

export interface IStep {
  id: number;
  description: string;
  number?: number;
  name?: string;
}

export interface IOptionInitialiceEntry {
  id: string;
  value: string;
  isActive: boolean;
}

export interface IFormAddPosition {
  generalInformation: { isValid: boolean; values: IGeneralInformationEntry };
}

export interface IFormAddPositionRef {
  generalInformation: React.RefObject<FormikProps<IGeneralInformationEntry>>;
}

export type IHandleUpdateDataSwitchstep = IGeneralInformationEntry;
