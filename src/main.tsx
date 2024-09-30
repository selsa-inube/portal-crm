import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
