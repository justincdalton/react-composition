import { PageData } from './pageTypes';

export const PageInfo = ({ data }: { data: PageData }) => {
  return (
    <div className="card">
      <p>Here is some info about the page.</p>
      <p>Number of data rows: {data.length}</p>
    </div>
  )
}
