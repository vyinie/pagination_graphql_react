import NotesTable from '../components/NotesTable'
import PaginationControl from '../components/PaginationControl'
import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'

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

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const GET_NOTES_PAGE = gql`
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

  const [loadedPages, setLoadedPages] = useState<PageProps[]>(data?.Pages)

  const selectedPages = loadedPages?.find((page) => page.pag === currentPage)

  return (
    <div className="grid h-full place-content-center place-items-center gap-2">
      {loading ? <div>carregando...</div> : <NotesTable page={selectedPages} />}

      <PaginationControl
        pages={loadedPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default App
