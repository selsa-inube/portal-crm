export interface IActions {
  [key: string]: React.ReactNode;
}

export interface IAction {
  id: string;
  actionName: string;
  content: (entry: IActions) => React.ReactNode;
}

export interface IPosition {
  [key: string]: React.ReactNode;
  Codigo: string;
  Solicitante: string;
  "Fecha-solicitud": string;
  Destino: string;
  Valor: string;
  Estado: string;
  Acciones?: string;
  n_roles?: string[];
}
