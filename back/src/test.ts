import { createInterface } from "node:readline";
import { addToDb } from ".";

const prompt = createInterface({
  input: process.stdin,
  output: process.stdout,
});

prompt.question("pagina desejada: ", (answer) => {
  addToDb(Number(answer));
  prompt.question("pagina desejada: ", (answe) => {
    addToDb(Number(answe));
    prompt.close();
  });
});
