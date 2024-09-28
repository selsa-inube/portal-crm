import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Login } from "@pages/login";
import { ErrorPage } from "@components/layout/ErrorPage";
import AppContextProvider from "@context/AppContext";

import { LoginRoutes } from "./routes/login";
import { GlobalStyles } from "./styles/global";
import { CreditRoutes } from "./routes/credit";
import { Home } from "./pages/home";
import { AppPage } from "./components/layout/AppPage";

const routeConfig = (
  <>
    <Route path="*" element={<Login />} errorElement={<ErrorPage />} />
    <Route path="login/*" element={<LoginRoutes />} />
    <Route path="/home" element={<AppPage showNav={false} />}>
      <Route path="/home" element={<Home />} />
    </Route>
    <Route path="credit/*" element={<CreditRoutes />} />
  </>
);

const router = createBrowserRouter(createRoutesFromElements(routeConfig));

function App() {
  return (
    <AppContextProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </AppContextProvider>
  );
}

export default App;
