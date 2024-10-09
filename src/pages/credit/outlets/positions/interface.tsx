import { useLocation } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import { useMediaQuery } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { Button } from "@inubekit/button";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import {
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  Td,
  Tfoot,
  Pagination,
} from "@inubekit/table";
import { PageTitle } from "@components/PageTitle";

import { creditOptionsConfig } from "../../config/credit.config";
import { titlesOptions, positionsData } from "./config/dataPositions";
import { IPosition } from "./types";
import { usePagination } from "./components/GeneralInformationForm/utils";
import { useState } from "react";
import { Details } from "./components/Detail";

interface IPositionsProps {
  data: IPosition[];
  loading: boolean;
  pageRecord?: number;
}

export function PositionsUI(props: IPositionsProps) {
  const { loading, data, pageRecord = 10 } = props;

  const [detailAction, setDetailAction] = useState("");
  const smallScreen = useMediaQuery("(max-width:880px)");
  const location = useLocation();
  const label = creditOptionsConfig.find(
    (item) => item.url === location.pathname
  );

  const {
    handleStartPage,
    handlePrevPage,
    handleNextPage,
    handleEndPage,
    firstEntryInPage,
    lastEntryInPage,
    paginatedData,
  } = usePagination(positionsData, pageRecord);

  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={smallScreen ? "24px" : "32px 64px"}
    >
      <Stack direction="column">
        <Stack gap="24px" direction="column">
          {label && (
            <>
              <Breadcrumbs crumbs={label.crumbs} />
              <PageTitle title={label.label} navigatePage="/credit" />
            </>
          )}
        </Stack>
        <Stack gap="32px" direction="column">
          <Stack justifyContent="end" alignItems="center">
            <Button iconBefore={<MdAdd />} spacing="wide" type="link" path="/credit/positions/add-position">
              Nuevo prospecto
            </Button>
          </Stack>
          {loading && data.length <= 0 ? (
            <Button children="login" />
          ) : (
            <Table tableLayout="auto">
              <Thead>
                <Tr border="bottom">
                  {titlesOptions.map((title, index) => (
                    <Th
                      key={index}
                      action={title.action}
                      align={title.action ? "center" : "left"}
                    >
                      {title.titleName}
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {paginatedData.map((entry, rowIndex) => (
                  <Tr key={rowIndex}>
                    {titlesOptions.map((title) => (
                      <Td
                        key={`e-${entry[title.id]}`}
                        align={title.id === "Acciones" ? "center" : "left"}
                        type={title.id === "Acciones" ? "custom" : "text"}
                        appearance={rowIndex % 2 === 0 ? "dark" : "light"}
                      >
                        {title.id === "Acciones" ? (
                          <Details
                            isOpen={detailAction === String(rowIndex)}
                            onOpen={() => setDetailAction(String(rowIndex))}
                            onClose={() => setDetailAction("")}
                          />
                        ) : (
                          entry[title.id]
                        )}
                      </Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr border="bottom">
                  <Td
                    colSpan={titlesOptions.length}
                    type="custom"
                    align="right"
                  >
                    <Pagination
                      firstEntryInPage={firstEntryInPage}
                      lastEntryInPage={lastEntryInPage}
                      totalRecords={positionsData.length}
                      handleStartPage={handleStartPage}
                      handlePrevPage={handlePrevPage}
                      handleNextPage={handleNextPage}
                      handleEndPage={handleEndPage}
                    />
                  </Td>
                </Tr>
              </Tfoot>
            </Table>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
