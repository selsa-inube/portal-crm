interface IOperator {
  name: string;
  logo: string;
}

interface IUserContext {
  username: string;
  id: string;
  company: string;
  operator: IOperator;
}

interface IClient {
  id: string;
  name: string;
  sigla: string;
  logo: string;
}

interface IAppContext {
  user: IUserContext;
  handleClientChange: (client: IClient) => void;
}

interface AppContextProviderProps {
  children: React.ReactNode;
}

export type { IAppContext, IClient, AppContextProviderProps };
