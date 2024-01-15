import { PageProps } from "@/src/app/App";
import { NoteRow } from "./NoteRow";
import { NoteHeader } from "./NoteHeader";

export default function NotesTable({ page }: { page: PageProps }) {
  return (
    <table className="block max-h-[400px] overflow-y-auto border-2 border-neutral-500 p-2 pt-0 text-center capitalize">
      <NoteHeader />

      <tbody className="">
        {page.content.map((note) => (
          <NoteRow note={note} key={note.id} />
        ))}
      </tbody>
    </table>
  );
}
