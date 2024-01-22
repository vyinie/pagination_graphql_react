import "reflect-metadata";

import { resolve } from "node:path";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { NotesResolver } from "./resolvers/notes-resolvers";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [NotesResolver],
    emitSchemaFile: resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({ schema });

  const { url } = await server.listen();
  console.log(`running ${url} 🚀`);
}

bootstrap();
