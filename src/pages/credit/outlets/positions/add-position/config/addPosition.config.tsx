import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";
import { Icon } from "@inubekit/icon";

export const stepsAddPosition = {
  generalInformation: {
    id: 1,
    label: "Requisitos no cumplidos",
    description: "Aspectos que son un impedimento y deben cambiar.",
  },
  destination: {
    id: 2,
    label: "Destino del dinero",
    description: "Seleccione el destino del dinero.",
  },
  productSelection: {
    id: 3,
    label: "Elección del producto",
    description: "Seleccione el destino del dinero.",
  },
  loanConditions: {
    id: 4,
    label: "Condiciones de préstamo",
    description: "Condiciones para amortizar el préstamo.",
  },
  requestValue: {
    id: 5,
    label: "Valor de la solicitud",
    description: "Detalles del valor de la solicitud",
  },
  requestValue6: {
    id: 6,
    label: "Valor de la solicitud",
    description: "Detalles del valor de la solicitud",
  },
  requestValue7: {
    id: 7,
    label: "Valor de la solicitud",
    description: "Detalles del valor de la solicitud",
  },
  requestValue8: {
    id: 8,
    label: "Valor de la solicitud",
    description: "Detalles del valor de la solicitud",
    isVerification: true,
  },
};

export const createPositionConfig = [
  {
    id: 1,
    title: "Nuevo prospecto",
    description:
      "Aspectos que son un impedimento y deben cambiar.",
    route: "/privileges/positions/add-position",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/home",
        isActive: false,
      },
      {
        path: "/credit",
        label: "Crédito",
        id: "/credit",
        isActive: false,
      },
      {
        path: "/credit/positions",
        label: "Prospectos",
        id: "/credit/positions",
        isActive: false,
      },
      {
        path: "/credit/positions/add-position",
        label: "Nuevo prospecto",
        id: "/credit/positions/add-position",
        isActive: true,
      },
    ],
  },
];

export const finishAssistedPositionModalConfig = {
  title: "Finalizar registro",
  description: "¿Está seguro de que desea finalizar el proceso de creación?",
  actionText: "Finalizar",
  appearance: "success",
};

export const finishAssistedPositionMessagesConfig = {
  success: {
    id: 1,
    icon: <Icon appearance="dark" icon={<MdThumbUpOffAlt />} size="18px" />,
    title: "Creación exitosa",
    description: (value: string) =>
      `Hemos creado el cargo ${value} exitosamente.`,
    appearance: "success",
  },
  failed: {
    id: 2,
    icon: <Icon appearance="dark" icon={<MdErrorOutline />} size="18px" />,
    title: "¡Uy, algo ha salido mal!",
    description: (value: string) =>
      `Hemos presentado un error creando el cargo ${value}.`,
    appearance: "danger",
  },
};

export const finishAssistedModalConfig = {
  title: "Finalizar registro",
  description: "¿Está seguro de que desea finalizar el proceso de creación?",
  actionText: "Finalizar",
  appearance: "success",
};

export const buttonText = {
  next: "Siguiente",
  back: "Anterior"
}