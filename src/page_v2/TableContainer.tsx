import React, { useMemo, useState, useContext } from "react";
import { PageTable } from "./PageTable";
import { PageTableControls, SortDir } from "./PageTableControls";
import { PageData } from "./pageTypes";

export type SortDir = "asc" | "desc";
export type Table = {
  sortDir: SortDir;
  setSortDir: Function;
};

const TableContext = React.createContext<Table>();

export const useTable = () => {
  return useContext(TableContext);
};

export const TableContainer = ({ children }) => {
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const contextValue = useMemo(() => ({ sortDir, setSortDir }), [sortDir]);

  return (
    <TableContext.Provider value={contextValue}>
      <div className="card">{children}</div>
    </TableContext.Provider>
  );
};
