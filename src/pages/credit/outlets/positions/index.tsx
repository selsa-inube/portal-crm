import { useEffect, useState } from "react";
import { getAll } from "@mocks/utils/dataMock.service";

import { PositionsUI } from "./interface";
import { IPosition } from "./types";

export function Positions() {
  const [loading, setLoading] = useState(false);
  const [positions, setPositions] = useState<IPosition[]>([]);

  useEffect(() => {
    getAll("staff-positions")
      .then((data) => {
        setLoading(true);
        if (data !== null) {
          setPositions(data as IPosition[]);
        }
      })
      .catch((error) => {
        console.info(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <PositionsUI loading={loading} data={positions} pageRecord={10} />;
}
