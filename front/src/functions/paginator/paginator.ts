const paginator = (listToPaginate: any[], limitPerPage: number) => {
  const pageList = [{ pag: 1, content: [] }];

  listToPaginate.map((item) => {
    const lastPageIndex = pageList.length - 1;

    if (pageList[lastPageIndex].content.length === limitPerPage) {
      pageList.push({ pag: pageList.length + 1, content: [item] });
    } else {
      pageList[lastPageIndex].content.push(item);
    }
  });

  return pageList;
};

export { paginator };
