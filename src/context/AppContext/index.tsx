import { createContext, useState, useEffect } from "react";

import linparLogo from "@assets/images/linpar.png";

import { IAppContext, AppContextProviderProps, IClient } from "./types";

export const AppContext = createContext<IAppContext>({
  user: {
    username: "",
    id: "",
    company: "",
    operator: { name: "", logo: "" },
  },
  handleClientChange: () => {},
});

export default function AppContextProvider(props: AppContextProviderProps) {
  const { children } = props;
  const [clientSigla, setClientSigla] = useState(
    localStorage.getItem("clientSigla") || ""
  );

  const initialClientLogo = localStorage.getItem("clientLogo") || linparLogo;
  const [clientLogo, setClientLogo] = useState<string>(initialClientLogo);

  function handleClientChange(client: IClient) {
    const { sigla, logo } = client;
    setClientSigla(sigla);
    setClientLogo(logo);
  }

  useEffect(() => {
    localStorage.setItem("clientSigla", clientSigla);
    localStorage.setItem("clientLogo", clientLogo);
  }, [clientSigla, clientLogo]);

  const company = clientSigla;

  const userContext: IAppContext = {
    user: {
      username: `Camilo`,
      id: "abc123",
      company: company,
      operator: {
        name: "Linpar",
        logo: clientLogo,
      },
    },
    handleClientChange,
  };

  return (
    <AppContext.Provider value={userContext}>{children}</AppContext.Provider>
  );
}
