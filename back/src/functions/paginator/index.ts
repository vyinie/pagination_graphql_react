import { PageProps } from "../../dtos/models/note-page-model";

export class Paginator {
  private unordedList: any[];
  private limitPerPage: number;

  constructor(list: any[], limitPerPage: number) {
    this.unordedList = list || [];
    this.limitPerPage = limitPerPage || 10;
  }

  specificPages(pagesRequested: number[]): PageProps[] {
    const pages: PageProps[] = [];

    pagesRequested.map((pageNum) => {
      const pageContent = [];
      const numOfPages = Math.ceil(this.unordedList.length / this.limitPerPage);

      for (let itemOfPage = 0; itemOfPage < this.limitPerPage; itemOfPage++) {
        const itemIndex = (pageNum - 1) * this.limitPerPage + itemOfPage;

        pageContent.push(this.unordedList[itemIndex]);
      }
      if (pages.length < numOfPages) {
        pages.push({
          pag: pageNum,
          content: pageContent.filter((page) => page),
        });
      }
    });

    return pages;
  }

  get allPages(): PageProps[] {
    const pages: PageProps[] = [{ content: [], pag: 1 }];

    this.unordedList.map((item) => {
      const currentPageIndex = pages.length - 1;

      if (pages[currentPageIndex].content.length < this.limitPerPage) {
        pages[currentPageIndex].content.push(item);
      } else {
        pages.push({ content: [item], pag: pages.length });
      }
    });
    return pages;
  }
}
