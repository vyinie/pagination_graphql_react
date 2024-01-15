import { writeFileSync } from "fs";
import { paginator } from "./src/paginator";
import notesList from "./notesList";

const paginated = paginator(notesList, 20);

writeFileSync("NotesList.json", JSON.stringify(notesList));
