import { ArgsType, Field, Float, Int } from "type-graphql";
@ArgsType()
export class PagesArgs {
  @Field(() => Int)
  pagesRequested: number;

  @Field(() => Int)
  limitPerPage: number;
}
