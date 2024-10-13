import { Route, Routes } from "react-router-dom";

import { CreditOptions } from "@pages/credit/outlets/options";
import { Credit } from "@pages/credit";
import { ErrorPage } from "@components/layout/ErrorPage";

function CreditRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Credit />}>
        <Route path="options" element={<CreditOptions />} />
      </Route>
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { CreditRoutes };
