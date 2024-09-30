import { Route, Routes } from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";
import { CreditOptions } from "@src/pages/credit/outlets/options";
import { Positions } from "@src/pages/credit/outlets/positions";
import { AddPosition } from "@src/pages/credit/outlets/positions/add-position";

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
