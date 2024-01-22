import { PageProps } from '@/src/interfaces'

/* export class Paginator {
  private unordedList: any[]
  private limitPerPage: number

  constructor(list: any[], limitPerPage: number) {
    this.unordedList = list || []
    this.limitPerPage = limitPerPage || 10
  }

  get pages() {
    const pagesList = [{ pag: 1, content: [] }]

    this.unordedList.map((item: never) => {
      const lastPageIndex = pagesList.length - 1

      if (pagesList[lastPageIndex].content.length === this.limitPerPage) {
        pagesList.push({ pag: pagesList.length + 1, content: [item] })
      } else {
        pagesList[lastPageIndex].content.push(item)
      }
    })

    return pagesList
  }
} */

export function usePagination<PageContentType = any>(
  currentPage: number,
  pages: PageProps<PageContentType>[],
) {
  const index = currentPage - 1

  const prevPage = (prevNum: number) =>
    index - prevNum < 0 ? null : index - prevNum

  const nextPage = (nextNum: number) =>
    index + nextNum > pages.length - 1 ? null : index + nextNum

  const loadedPages = () => {
    const paginationPattern = [
      pages[0],
      pages[prevPage(2)],
      pages[prevPage(1)],
      pages[index],
      pages[nextPage(1)],
      pages[nextPage(2)],
      pages[pages.length - 1],
    ]
    return paginationPattern.filter((page) => page)
  }

  const pagesList = [...new Set(loadedPages())]

  const paginatedPages = () => {
    const holder = pagesList
    const nullPage: PageProps = { content: [], pag: -1 }

    if (index > 3) {
      holder.splice(1, 0, nullPage)
    }
    if (index < pages.length - 4) {
      holder.splice(holder.length - 1, 0, nullPage)
    }
    return holder
  }

  return paginatedPages()
}
