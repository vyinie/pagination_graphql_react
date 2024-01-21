export interface PageProps {
  pag: number;
  content: any[];
}

export class Paginator {
  private unordedList: any[];
  private limitPerPage: number;

  constructor(list: any[], limitPerPage: number) {
    this.unordedList = list || [];
    this.limitPerPage = limitPerPage || 10;
  }

  pages(pagesRequested: number[]): PageProps[] {
    const pages: PageProps[] = [];
    pagesRequested.map((page) => {
      pages.push({
        content: [page/* this.unordedList[page - 1 * this.limitPerPage] */],
        pag: page,
      });
    });
    return pages;
  }
}
