import { PageView } from './PageView'

export const PageContainer = () => {
  const data = [
    { id: 1, name: 'Test 1', viewCount: 1000 },
    { id: 2, name: 'Test 2', viewCount: 200 },
  ]

  return (
    <div className='App'>
      <PageView data={data} />
    </div>
  )
}
