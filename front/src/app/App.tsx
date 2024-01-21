import NotesTable from '../components/NotesTable'
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

  return (
    <div className="grid h-full place-content-center place-items-center gap-2">
      <NotesTable page={selectedPages} />

      <PaginationControl
        pages={loadedPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default App
