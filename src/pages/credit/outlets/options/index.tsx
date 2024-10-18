import { creditConfig } from "@src/config/credit/breadcrumbs.config";
import { creditOptionsConfig } from "@src/config/credit/appcards.config";

import { CreditOptionsUI } from "./interface";

function CreditOptions() {
  return (
    <CreditOptionsUI
      appName={creditConfig[0].label}
      appDescription={creditConfig[0].description}
      appOptions={creditOptionsConfig}
      appRoute={creditConfig[0].crumbs}
      navigatePage="/home"
    />
  );
}

export { CreditOptions };
