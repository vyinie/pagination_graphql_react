import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class NoteModel {
  @Field()
  id: Number;

  @Field()
  name: String;

  @Field()
  value: Number;

  @Field()
  class: String;

  @Field()
  inFlow: Boolean;

  @Field()
  date: String;
}
