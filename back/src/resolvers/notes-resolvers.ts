import { Arg, Query, Resolver } from "type-graphql";

import { notesList } from "../../notesList";
import { Paginator } from "../functions/paginator";

import { NoteModel } from "../dtos/models/note-model";
import { NotePageModel } from "../dtos/models/note-page-model";

@Resolver()
export class NotesResolver {
  @Query(() => String)
  async Notes(@Arg("name") name: string) {
    return name;
  }

  @Query(() => [NotePageModel || Number])
  async Pages(@Arg("currentPage") currentPage: number) {
    const paginator = new Paginator(notesList, 16);
    const paginationData = paginator.paginationData(currentPage, paginator.pages);

    return paginationData;
  }
}
