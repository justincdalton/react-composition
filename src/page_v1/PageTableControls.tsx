
export type SortDir = 'asc' | 'desc';

export const PageTableControls = ({ sortDir, setSortDir }: { sortDir: SortDir; setSortDir: Function }) => {
  const handleClick = () => {
    const newSortDir = sortDir === 'asc' ? 'desc' : 'asc';
    setSortDir(newSortDir);
  }

  return (
    <div>
      <button onClick={handleClick}>Sort!</button>
    </div>
  )
}
