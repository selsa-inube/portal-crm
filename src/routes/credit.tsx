import { Route, Routes } from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";
import { CreditOptions } from "@pages/credit/outlets/options";
import { Positions } from "@pages/credit/outlets/positions";

function CreditRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CreditOptions />} />
      <Route path="/positions" element={<Positions />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { CreditRoutes };
