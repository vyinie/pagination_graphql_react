const paginationData = (
  index: number,
  pages: {
    pag: number;
    content: any[];
  }[],
) => {
  const prevPage = (prevNum: number) =>
    index - prevNum < 0 ? null : index - prevNum;

  const nextPage = (nextNum: number) =>
    index + nextNum > pages.length - 1 ? null : index + nextNum;

  const loadedPages = [
    pages[prevPage(2)],
    pages[prevPage(1)],
    pages[index],
    pages[nextPage(1)],
    pages[nextPage(2)],
  ].filter((page) => page);

  const data = {
    numOfPages: pages.length,
    index,
    currentPage: index + 1,
    prev: [
      { index: prevPage(2), page: prevPage(2) + 1 },
      { index: prevPage(1), page: prevPage(1) + 1 },
    ],
    next: [
      { index: nextPage(1), page: nextPage(1) + 1 },
      { index: nextPage(2), page: nextPage(2) + 1 },
    ],
    pages: loadedPages,
  };

  return data;
};

export { paginationData };
