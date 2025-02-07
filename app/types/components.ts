export type AppPaginationPropsT = {
  items: number
  first: number | undefined
  prev: number | undefined | null
  next: number | undefined | null
  last: number | undefined
  pages: number | undefined
  selectedPage: string
  perPage: string
}
