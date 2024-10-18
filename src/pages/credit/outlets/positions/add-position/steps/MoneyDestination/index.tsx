import { useState } from "react";
import { useMediaQueries } from "@inubekit/hooks";

import { moneyDestinations } from "@src/config/credit/prospect/moneydestination.config";

import { MoneyDestinationUI } from "./interface";

function MoneyDestination() {
  const [selectedDestination, setSelectedDestination] = useState<string>("");

  console.log(selectedDestination);

  const mediaQueries = ["(max-width: 1024px)", "(max-width: 600px)"];
  const matches = useMediaQueries(mediaQueries);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDestination(e.target.value);
  };

  return (
    <MoneyDestinationUI
      destinations={moneyDestinations}
      matches={matches}
      handleChange={handleChange}
    />
  );
}
export { MoneyDestination };
