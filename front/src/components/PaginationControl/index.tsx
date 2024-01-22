import { Dispatch, SetStateAction, memo, useEffect } from 'react'
import PageLink from './PageLink'
import { NoteProps, PageProps } from '@/src/interfaces'
import { gql, useQuery, useSuspenseQuery } from '@apollo/client'
import { usePagination } from '@/src/functions/paginator'

export interface PaginationDataProps {
  currentPage: number
  pages: PageProps[]
  setCurrentPage: Dispatch<SetStateAction<number>>
  setLoadedPages: Dispatch<SetStateAction<PageProps[]>>
}
const GET_PAGES = gql`
  query Pages($pagesRequested: [Float!]!) {
    Pages(pagesRequested: $pagesRequested) {
      pag
      content {
        id
        name
        value
        class
        inFlow
        date
      }
    }
  }
`
const PaginationControl = ({
  currentPage,
  pages,
  setCurrentPage,
  setLoadedPages,
}: PaginationDataProps) => {
  const visiblePages = usePagination<NoteProps>(currentPage, pages)

  const requestPage = () => {
    const index = currentPage - 1
    const requestedPages: number[] = []

    for (let wantedPageIndex = -2; wantedPageIndex <= 2; wantedPageIndex++) {
      const wantedPage = currentPage + wantedPageIndex

      if (
        wantedPage > 0 &&
        wantedPageIndex !== 0 &&
        wantedPage < pages[pages.length - 1].pag
      ) {
        const exists = pages[index + wantedPageIndex]?.pag === wantedPage
        if (!exists) requestedPages.push(wantedPage)
      }
    }
    return requestedPages
  }
  const pagesRequested = requestPage()

  const query =
    pagesRequested.length > 0 &&
    useQuery<{ Pages: PageProps[] }>(GET_PAGES, {
      variables: {
        pagesRequested: pagesRequested,
      },
    })
  const getPages = () => {
    if (!query?.loading && query?.data) {
      console.log(query.data.Pages)
      let newPages = [...new Set([...pages, ...query.data.Pages])]
      newPages = newPages.sort((a, b) => a.pag - b.pag)
      setLoadedPages(newPages)
    }
  }

  return (
    <div className="flex rounded bg-neutral-800">
      {visiblePages?.map((page) => (
        <PageLink
          key={
            page.pag > 0
              ? `pag${page.pag}`
              : `${Math.floor(Math.random() * 100)}`
          }
          isAvailable={page.pag > 0}
          currentPageHandler={() => {
            setCurrentPage(page.pag)
            getPages()
          }}
          isCurrentPage={page.pag === currentPage}
          pagNum={page.pag}
        />
      ))}
    </div>
  )
}

export { PaginationControl }
