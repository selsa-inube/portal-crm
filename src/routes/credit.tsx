import { Route, Routes } from "react-router-dom";

import { CreditOptions } from "@pages/credit/outlets/options";
import { Credit } from "@pages/credit";
import { ErrorPage } from "@components/layout/ErrorPage";
import { Positions } from "@pages/credit/outlets/positions";
import { AddPosition } from "@pages/credit/outlets/positions/add-position";

function CreditRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Credit />}>
        <Route path="options/" element={<CreditOptions />} />
        <Route path="options/positions" element={<Positions />} />
        <Route
          path="options/positions/add-position"
          element={<AddPosition />}
        />
      </Route>
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { CreditRoutes };
