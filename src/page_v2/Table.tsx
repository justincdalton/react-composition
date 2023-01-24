
export const Table = ({ data, headers, renderRow }: { data: any[]; headers: string[]; renderRow: Function }) => {
  return (
    <table>
      <thead>
        {headers.map((header) => (
          <th>
            <td>{header}</td>
          </th>
        ))}
      </thead>
      <tbody>
        {data.map((rowData) => renderRow(rowData))}
      </tbody>
    </table>
  )
}
