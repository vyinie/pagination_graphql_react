import NotesTable from '../components/NotesTable'
import PaginationControl from '../components/PaginationControl'
import { Paginator } from '../functions/paginator'
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

const GET_NOTES = gql`
  query Notes {
    Notes {
      id
      name
      value
      class
      inFlow
      date
    }
  }
`

function App() {
  const { data, loading } = useQuery(GET_NOTES)
  const paginator = new Paginator(data?.Notes, 20)
  const pages = paginator.pages

  const [currentPage, setCurrentPage] = useState(1)
  const paginationData = paginator.paginationData(currentPage, pages)

  return (
    <div className="grid h-full place-content-center place-items-center gap-2">
      {loading ? (
        <div>carregando...</div>
      ) : (
        <NotesTable page={pages[currentPage - 1]} />
      )}

      <PaginationControl
        pages={paginationData.pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default App
