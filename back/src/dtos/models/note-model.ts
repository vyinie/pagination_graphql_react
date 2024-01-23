import { Field, ObjectType } from "type-graphql";
<<<<<<< HEAD
export interface NoteProps {
  id: number;
  name: string;
  value: number;
  class: string;
  inFlow: boolean;
  date: string;
}
=======

>>>>>>> origin
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
