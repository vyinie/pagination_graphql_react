import { Args, Query, Resolver } from "type-graphql";

import { notesList } from "../../notesList";
import { Paginator } from "../functions/paginator";

import { NotePageModel } from "../dtos/models/note-page-model";
import { PagesArgs } from "../dtos/arg-types/pages-args";

@Resolver()
export class NotesResolver {
  @Query(() => [NotePageModel])
  async Pages(@Args() { limitPerPage, pagesRequested }: PagesArgs) {
    const paginator = new Paginator(notesList, 16);
    const pages = paginator.pages([pagesRequested]);
    return pages;
  }
}
