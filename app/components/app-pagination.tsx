import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/app/components/primitives/pagination'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { useSearchParams } from 'react-router'

export const AppPagination = (props: { total: number }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedPage = parseInt(searchParams.get('page') || '1')
  const count = parseInt(searchParams.get('count') || '10')
  const { total } = props
  const pages = Math.ceil(total / count)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem
          className={
            selectedPage === 1 ? 'pointer-events-none text-gray-400' : ''
          }
        >
          <PaginationLink href={`/dashboard/contracts?count=${count}&page=1`}>
            <ChevronsLeft />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem
          className={
            selectedPage - 1 === 0 ? 'pointer-events-none text-gray-400' : ''
          }
        >
          <PaginationLink
            href={`/dashboard/contracts?count=${count}&page=${selectedPage - 1}`}
          >
            <ChevronLeft />
          </PaginationLink>
        </PaginationItem>
        {[...Array(pages)].map((_null, page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`/dashboard/contracts?count=${count}&page=${page + 1}`}
              isActive={page + 1 === selectedPage}
            >
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem
          className={
            selectedPage === pages ? 'pointer-events-none text-gray-400' : ''
          }
        >
          <PaginationLink
            href={`/dashboard/contracts?count=${count}&page=${selectedPage + 1}`}
          >
            <ChevronRight />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem
          className={
            selectedPage === pages ? 'pointer-events-none text-gray-400' : ''
          }
        >
          <PaginationLink
            href={`/dashboard/contracts?count=${count}&page=${pages}`}
          >
            <ChevronsRight />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
