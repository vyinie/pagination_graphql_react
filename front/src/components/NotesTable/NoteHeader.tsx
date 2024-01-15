export function NoteHeader() {
  return (
    <thead className="sticky top-0 bg-neutral-700">
      <tr className="border-b-2 border-neutral-400">
        <th className="py-1">title</th>
        <th className="py-1">value</th>
        <th className="py-1">class</th>
        <th className="py-1">flow</th>
      </tr>
    </thead>
  );
}
