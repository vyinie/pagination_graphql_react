import NotesTable from '../components/NotesTable'
<<<<<<< HEAD
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
=======
import notesList from '@/src/db/NotesList.json'
import pages from '@/src/db/pages.json'
import PaginationControl from '../components/PaginationControl'
import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { Paginator } from '../functions/paginator'

export interface NoteProps {
  id: number
  name: string
  value: number
  class: string
  inFlow: boolean
  date: string
}
export interface PageProps {
  pag: number
  content: NoteProps[]
}

const paginator = new Paginator(notesList, 15)

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  /*   const GET_NOTES_PAGE = gql`
    query PaginatedNotes {
      Pages(currentPage: ${currentPage}) {
        content {
          id
          name
          value
          class
          inFlow
          date
        }
        pag
      }
    }
  `
  const { data, loading } = useQuery(GET_NOTES_PAGE)
  */

  // const [loadedPages, setLoadedPages] = useState<PageProps[]>()
  const loadedPages = pages

  const selectedPages = loadedPages?.find((page) => page.pag === currentPage)
>>>>>>> origin

  return (
    <div className="grid h-full place-content-center place-items-center gap-2">
      <NotesTable page={selectedPages} />

      <PaginationControl
<<<<<<< HEAD
        setLoadedPages={setLoadedPages}
=======
>>>>>>> origin
        pages={loadedPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default App
