import { useTable } from "./TableContainer";

export type SortDir = "asc" | "desc";

export const PageTableControls = () => {
  const { sortDir, setSortDir } = useTable();

  const handleClick = () => {
    const newSortDir = sortDir === "asc" ? "desc" : "asc";
    setSortDir(newSortDir);
  };

  return (
    <div>
      <button onClick={handleClick}>Sort!</button>
    </div>
  );
};
