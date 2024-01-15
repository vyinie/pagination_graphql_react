import { createInterface } from "node:readline";
import { Paginator } from ".";

const list = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
];
const prompt = createInterface({
  input: process.stdin,
  output: process.stdout,
});
const paginator = new Paginator(list, 5);

prompt.question("pagina desejada: ", (answer) => {
  paginator.paginationData(Number(answer), list);
  prompt.question("pagina desejada: ", (answe) => {
    paginator.paginationData(Number(answe), list);
    prompt.close();
  });
});
