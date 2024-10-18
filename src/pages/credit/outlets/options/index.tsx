import { appsConfig } from "@config/nav";
import { creditOptionsConfig } from "@pages/credit/config/credit.config";

import { CreditOptionsUI } from "./interface";

function CreditOptions() {
  return (
    <CreditOptionsUI
      appName={appsConfig[0].label}
      appOptions={creditOptionsConfig}
      appRoute={appsConfig[0].crumbs}
    />
  );
}

export { CreditOptions };
