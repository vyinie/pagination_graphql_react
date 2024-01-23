import { Field, ObjectType } from "type-graphql";
import { NoteModel } from "./note-model";
export interface PageProps<T = any> {
  pag: number;
  content: T[];
}

@ObjectType()
export class NotePageModel {
  @Field()
  pag: Number;

  @Field(() => [NoteModel])
  content: [NoteModel];
}
