import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";
import { AppPage } from "@components/layout/AppPage";

import { GlobalStyles } from "./styles/global";
import { CreditRoutes } from "./routes/credit";
import AppContextProvider from "./context/AppContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route errorElement={<ErrorPage />} />
      <Route path="/*" element={<AppPage />}>
        <Route path="credit/*" element={<CreditRoutes />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <AppContextProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </AppContextProvider>
    </>
  );
}

export default App;
