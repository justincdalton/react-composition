import { PageTableRow } from "./PageTableRow";
import { PageDataRow } from "./pageTypes";
import { Table } from "./Table";
import { useTable } from "./TableContainer";
import { usePageData } from "./usePageData";

const renderRow = (rowData: PageDataRow) => <PageTableRow rowData={rowData} />;

export const PageTable = () => {
  const data = usePageData();
  const { sortDir } = useTable();
  const headers = ["ID", "Name", "View Count"];

  let sortFn = (a: { viewCount: number }, b: { viewCount: number }) =>
    a.viewCount - b.viewCount;

  if (sortDir === "desc") {
    sortFn = (a, b) => b.viewCount - a.viewCount;
  }

  const sortedData = data.sort(sortFn);

  return <Table data={sortedData} headers={headers} renderRow={renderRow} />;
};
