// import PaginatedNotesList from "@/src/db/paginatedNotesList.json";
import NotesList from "@/src/db/NotesList.json";
import NotesTable from "../components/NotesTable";
import PaginationControl from "../components/PaginationControl";
import { Paginator } from "../functions/paginator";
import { useState } from "react";
export interface NoteProps {
  id: number;
  name: string;
  value: number;
  class: string;
  inFlow: boolean;
  date: string;
}
export interface PageProps {
  pag: number;
  content: NoteProps[];
}

const paginator = new Paginator(NotesList, 20);
const pages = paginator.pages;
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const paginationData = paginator.paginationData(currentPage, pages);
  return (
    <div className="grid h-full place-content-center place-items-center gap-2">
      <NotesTable page={pages[currentPage - 1]} />

      <PaginationControl
        pages={paginationData.pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
