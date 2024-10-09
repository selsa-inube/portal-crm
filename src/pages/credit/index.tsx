import { CreditUI } from "./interface";
import { useNavigate, useMatch } from "react-router-dom";
import { useEffect } from "react";

function Credit() {
  const navigate = useNavigate();
  const match = useMatch("/credit");

  useEffect(() => {
    if (match) {
      navigate("/credit/options");
    }
  }, [match, navigate]);

  return <CreditUI />;
}

export { Credit };
