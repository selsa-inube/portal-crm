import { appsConfig } from "@src/config/nav";
import { CreditOptionsUI } from "./interface";

import { creditOptionsConfig } from "../../config/credit.config";

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
