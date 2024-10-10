import { useNavigate, useMatch } from "react-router-dom";
import { useEffect } from "react";

import { CreditUI } from "./interface";

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
