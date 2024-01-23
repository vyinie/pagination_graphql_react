<<<<<<< HEAD
import { ArrayMinSize } from "class-validator";
import { ArgsType, Field, Int } from "type-graphql";
@ArgsType()
export class PagesArgs {
  @Field(() => [Number])
  @ArrayMinSize(1)
  pagesRequested: number[];

=======
import { ArgsType, Field, Float, Int } from "type-graphql";
@ArgsType()
export class PagesArgs {
  @Field(() => Int)
  pagesRequested: number;

  @Field(() => Int)
  limitPerPage: number;
>>>>>>> origin
}
