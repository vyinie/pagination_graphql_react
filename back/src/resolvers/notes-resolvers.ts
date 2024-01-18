import { Query, Resolver } from "type-graphql";
import { NoteModel } from "../dtos/models/note-model";
import { notesList } from "../../notesList";
@Resolver()
export class NotesResolver {
  @Query(() => [NoteModel])
  async Notes() {
    return notesList;
  }
}
