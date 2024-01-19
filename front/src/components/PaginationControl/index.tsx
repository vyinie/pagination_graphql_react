import { PageProps } from '@/src/app/App'
import { Dispatch, SetStateAction } from 'react'
import PageLink from './PageLink'

export interface PaginationDataProps {
  currentPage: number
  pages: PageProps[]
  setCurrentPage: Dispatch<SetStateAction<number>>
}

function PaginationControl({
  currentPage,
  pages,
  setCurrentPage,
}: PaginationDataProps) {
  return (
    <div className="flex rounded bg-neutral-800">
      {pages?.map((page) => (
        <PageLink
          key={
            page.pag > 0
              ? `pag${page.pag}`
              : `${Math.floor(Math.random() * 100)}`
          }
          isAvailable={page.pag > 0}
          currentPageHandler={() => setCurrentPage(page.pag)}
          isCurrentPage={page.pag === currentPage}
          pagNum={page.pag}
        />
      ))}
    </div>
  )
}

export default PaginationControl
