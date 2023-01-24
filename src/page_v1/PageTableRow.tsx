import { PageDataRow } from './pageTypes';

export const PageTableRow = ({ rowData }: { rowData: PageDataRow }) => {
  return (
    <tr>
      <td>{rowData.id}</td>
      <td>{rowData.name}</td>
      <td>{rowData.viewCount}</td>
    </tr>
  )
}
