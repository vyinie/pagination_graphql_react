import { ArrayMinSize } from "class-validator";
import { ArgsType, Field, Int } from "type-graphql";
@ArgsType()
export class PagesArgs {
  @Field(() => [Number])
  @ArrayMinSize(1)
  pagesRequested: number[];

}
