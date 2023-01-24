import { SortDir } from "./PageTableControls";
import { PageTableRow } from "./PageTableRow";
import { PageData, PageDataRow } from "./pageTypes";
import { Table } from "./Table";

const renderRow = (rowData: PageDataRow) => <PageTableRow rowData={rowData} />;

export const PageTable = ({
  data,
  sortDir,
}: {
  data: PageData;
  sortDir: SortDir;
}) => {
  const headers = ["ID", "Name", "View Count"];

  let sortFn = (a, b) => a.viewCount - b.viewCount;

  if (sortDir === "desc") {
    sortFn = (a, b) => b.viewCount - a.viewCount;
  }

  const sortedData = data.sort(sortFn);

  return <Table data={sortedData} headers={headers} renderRow={renderRow} />;
};
