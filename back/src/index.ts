import { paginator } from "./paginator";
import { paginationData } from "./paginationData";

const list = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
];
const db: {
  pag: number;
  content: any[];
}[] = [];

const limitPerPage = 6;
const paginated = paginator(list, limitPerPage);

function addToDb(answer: number) {
  const index = answer - 1;

  const selectedPages = paginationData(index, paginated).pages;
  const pagesToAdd = selectedPages.filter((page) =>
    db.every((savadPage) => savadPage.pag !== page.pag),
  );
  const pagesToGet = pagesToAdd.map((page) => page.pag);

  db.push(...pagesToAdd);
  db.sort((a, b) => a.pag - b.pag);

  console.log("db");
  console.log(db);

  console.log("\n");

  console.log("pags");
  console.log(pagesToGet);
}

export { addToDb, db };
