import { NoteProps } from "@/src/app/App";

export function NoteRow({ note }: { note: NoteProps }) {
  return (
    <tr className="border-b-2 border-neutral-400">
      <td className="py-1">{note.name}</td>
      <td
        data-in-flow={note.inFlow}
        className="data-[in-flow=true]:text-positive text-negative px-2 py-1"
      >
        {note.value.toLocaleString()}
      </td>
      <td className="py-1">{note.class}</td>
      <td
        data-in-flow={note.inFlow}
        className="data-[in-flow=true]:text-positive text-negative px-2 py-1"
      >
        {note.inFlow ? "entrada" : "saída"}
      </td>
    </tr>
  );
}
