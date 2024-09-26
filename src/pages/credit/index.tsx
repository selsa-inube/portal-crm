import { CreditUI } from "./interface";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Credit() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/credit" || location.pathname === "/credit/") {
      navigate("/credit/options");
    }
  }, [location, navigate]);

  return <CreditUI />;
}

export { Credit };
