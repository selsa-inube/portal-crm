import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";

import { AppContext } from "@context/AppContext";

import { CreditUI } from "./interface";

function Credit() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AppContext);
  console.log("AppData", user);
  useEffect(() => {
    if (location.pathname === "/credit" || location.pathname === "/credit/") {
      navigate("/credit/options");
    }
  }, [location, navigate]);

  return <CreditUI />;
}

export { Credit };
