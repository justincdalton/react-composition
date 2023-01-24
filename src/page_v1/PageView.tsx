import { PageInfo } from "./PageInfo";
import { PageData } from "./pageTypes";
import { TableContainer } from "./TableContainer";

export const PageView = ({ data }: { data: PageData }) => {
  return (
    <div>
      <h1>The Page!</h1>
      <PageInfo data={data} />
      <TableContainer data={data} />
    </div>
  );
};
