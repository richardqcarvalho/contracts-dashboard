import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/app/components/primitives/pagination'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/primitives/select'
import { parseInts } from '@/app/lib/utils'
import { AppPaginationPropsT } from '@/app/types/components'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { useNavigate } from 'react-router'

export const AppPagination = (props: AppPaginationPropsT) => {
  const navigate = useNavigate()
  const { items, first, prev, next, last, pages, selectedPage, perPage } = props
  const [nSelectedPage, nPerPage] = parseInts([selectedPage, perPage])
  const from = prev ? prev * nPerPage : first
  const to = nPerPage * nSelectedPage < items ? nPerPage * nSelectedPage : items

  return (
    <Pagination>
      <PaginationContent className='flex w-full flex-col justify-between gap-4 text-sm sm:flex-row'>
        <PaginationItem>
          <span>{`Showing ${from}-${to} of ${items}`}</span>
        </PaginationItem>
        <PaginationContent>
          <PaginationItem
            className={!prev ? 'pointer-events-none text-gray-400' : ''}
          >
            <PaginationLink
              href={`/dashboard/contracts?per_page=${perPage}&page=${first}`}
            >
              <ChevronsLeft />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem
            className={!prev ? 'pointer-events-none text-gray-400' : ''}
          >
            <PaginationLink
              href={`/dashboard/contracts?per_page=${perPage}&page=${prev}`}
            >
              <ChevronLeft />
            </PaginationLink>
          </PaginationItem>
          {[...Array(pages)].map((_null, index) => {
            const page = index + 1

            return (
              <PaginationItem key={index}>
                <PaginationLink
                  href={`/dashboard/contracts?per_page=${perPage}&page=${page}`}
                  isActive={page.toString() === selectedPage}
                  className={
                    index === 0 && pages === 1
                      ? 'pointer-events-none text-gray-400'
                      : ''
                  }
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          })}
          <PaginationItem
            className={!next ? 'pointer-events-none text-gray-400' : ''}
          >
            <PaginationLink
              href={`/dashboard/contracts?per_page=${perPage}&page=${next}`}
            >
              <ChevronRight />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem
            className={!next ? 'pointer-events-none text-gray-400' : ''}
          >
            <PaginationLink
              href={`/dashboard/contracts?per_page=${perPage}&page=${last}`}
            >
              <ChevronsRight />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
        <PaginationContent className='gap-2'>
          <PaginationItem>Contracts per page</PaginationItem>
          <PaginationItem>
            <Select
              value={perPage}
              onValueChange={value =>
                navigate(
                  `/dashboard/contracts?per_page=${value}&page=${selectedPage}`,
                )
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='10'>10</SelectItem>
                  <SelectItem value='20'>20</SelectItem>
                  <SelectItem value='30'>30</SelectItem>
                  <SelectItem value='40'>40</SelectItem>
                  <SelectItem value='50'>50</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </PaginationItem>
        </PaginationContent>
      </PaginationContent>
    </Pagination>
  )
}
