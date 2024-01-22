import { Field, ObjectType } from "type-graphql";
import { NotePageModel, PageProps } from "./note-page-model";
import { NoteProps } from "./note-model";

export interface PaginationDataProps {
  numOfPages: number;
  initialPages: PageProps<NoteProps>[];
}

@ObjectType({})
export class PaginationDataModel {
  @Field(() => Number)
  numOfPages: number;
  
  @Field(() => [NotePageModel])
  initialPages: [NotePageModel];

}
