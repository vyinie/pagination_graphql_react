export interface NoteProps {
  id: number
  name: string
  value: number
  class: string
  inFlow: boolean
  date: string
}
export interface PageProps<T = any> {
  pag: number
  content: T[]
}

export interface InitialPagesProps {
  BookData: {
    numOfPages: number
    initialPages: PageProps[]
  }
}
