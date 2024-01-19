import { Field, ObjectType } from "type-graphql";
import { NoteModel } from "./note-model";

@ObjectType()
export class NotePageModel {
  @Field(() => [NoteModel])
  content: [NoteModel];

  @Field()
  pag: Number;
}
