import { useState } from 'react'
import { PageTable } from './PageTable'
import { PageTableControls, SortDir } from './PageTableControls'
import { PageData } from './pageTypes'

export const PageTableLayout = ({ data }: { data: PageData }) => {
  const [sortDir, setSortDir] = useState<SortDir>('asc');

  return (
    <div className="card">
      <PageTableControls sortDir={sortDir} setSortDir={setSortDir} />
      <PageTable data={data} sortDir={sortDir} />
    </div>
  )
}
