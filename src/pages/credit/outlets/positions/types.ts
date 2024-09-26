export interface IActions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface IAction {
  id: string;
  actionName: string;
  content: (entry: IActions) => React.ReactNode;
}

export interface IPosition {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  Codigo: string;
  Solicitante: string;
  "Fecha-solicitud": string;
  Destino: string;
  Valor: string;
  Estado: string;
  Acciones?: string;
  n_roles?: string[];
}
