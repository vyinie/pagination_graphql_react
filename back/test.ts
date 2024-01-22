import { notesList } from "./notesList";
const itemsPerPage = 16;
const pageRequested = 3;

const data = [];
for (let itemOfPage = 0; itemOfPage < itemsPerPage; itemOfPage++) {
  const itemIndex = (pageRequested - 1) * itemsPerPage + itemOfPage;
  data.push(notesList[itemIndex]);
}

console.log(data);
