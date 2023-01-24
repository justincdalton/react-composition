import { PageData } from './pageTypes';
import { usePageData } from './usePageData';

export const PageInfo = () => {
  const data = usePageData();

  return (
    <div className="card">
      <p>Here is some info about the page.</p>
      <p>Number of data rows: {data.length}</p>
    </div>
  )
}
