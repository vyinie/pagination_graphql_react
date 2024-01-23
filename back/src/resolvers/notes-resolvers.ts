<<<<<<< HEAD
import { Arg, Args, Query, Resolver } from "type-graphql";

import { PagesArgs } from "../dtos/arg-types/pages-args";
import { Paginator } from "../functions/paginator";
import { notesList } from "../../notesList";
import { NotePageModel } from "../dtos/models/note-page-model";
import {
  PaginationDataModel,
  PaginationDataProps,
} from "../dtos/models/pagination-data-model";

const paginator = new Paginator(notesList, 16);
=======
import { Args, Query, Resolver } from "type-graphql";

import { notesList } from "../../notesList";
import { Paginator } from "../functions/paginator";

import { NotePageModel } from "../dtos/models/note-page-model";
import { PagesArgs } from "../dtos/arg-types/pages-args";
>>>>>>> origin

@Resolver()
export class NotesResolver {
  @Query(() => [NotePageModel])
<<<<<<< HEAD
  Pages(@Args() { pagesRequested }: PagesArgs) {
    const pages = paginator.specificPages(pagesRequested);

    return pages;
  }

  @Query(() => PaginationDataModel)
  BookData(): PaginationDataProps {
    const numOfPages = paginator.allPages.length;
    const initialPages = this.Pages({
      pagesRequested: [1, 2, 3, 4, numOfPages - 2, numOfPages - 1, numOfPages],
    });

    const paginationData: PaginationDataProps = {
      numOfPages: numOfPages,
      initialPages: initialPages,
    };
    return paginationData;
  }
=======
  async Pages(@Args() { limitPerPage, pagesRequested }: PagesArgs) {
    const paginator = new Paginator(notesList, 16);
    const pages = paginator.pages([pagesRequested]);
    return pages;
  }
>>>>>>> origin
}
