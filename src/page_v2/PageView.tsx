import { PageInfo } from "./PageInfo";
import { TableContainer } from "./TableContainer";
import { PageContainer } from "./PageContainer";
import { PageTableControls } from "./PageTableControls";
import { PageTable } from "./PageTable";

export const PageView = () => {
  return (
    <PageContainer>
      <h1>The Page!</h1>
      <PageInfo />
      <TableContainer>
        <PageTableControls />
        <PageTable />
      </TableContainer>
    </PageContainer>
  );
};
