import { Route, Routes } from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";
import { CreditOptions } from "@pages/credit/outlets/options";
import { Positions } from "@pages/credit/outlets/positions";
import { AddPosition } from "@pages/credit/outlets/positions/add-position";

function CreditRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CreditOptions />} />
      <Route path="/positions" element={<Positions />} />
      <Route path="/positions/add-position" element={<AddPosition />}/>
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { CreditRoutes };
