import NotesTable from '../components/NotesTable'
import { PaginationControl } from '../components/PaginationControl'
import { useState } from 'react'
import { gql, useSuspenseQuery } from '@apollo/client'
import { InitialPagesProps, NoteProps, PageProps } from '../interfaces'

const GET_INITIAL_PAGES = gql`
  query BookData {
    BookData {
      numOfPages
      initialPages {
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
  }
`

function App() {
  const { data } = useSuspenseQuery<InitialPagesProps>(GET_INITIAL_PAGES)

  const [currentPage, setCurrentPage] = useState(1)
  const [loadedPages, setLoadedPages] = useState<PageProps<NoteProps>[]>(
    data.BookData.initialPages,
  )

  const selectedPages = loadedPages.find((page) => page?.pag === currentPage)

  return (
    <div className="grid h-full place-content-center place-items-center gap-2">
      <NotesTable page={selectedPages} />

      <PaginationControl
        setLoadedPages={setLoadedPages}
        pages={loadedPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default App
