import { PageInfo } from './PageInfo'
import { PageData } from './pageTypes'
import { PageTableLayout } from './PageTableLayout'

export const PageView = ({ data }: { data: PageData }) => {
  return (
    <div>
      <h1>The Page!</h1>
      <PageInfo data={data} />
      <PageTableLayout data={data} />
    </div>
  )
}
