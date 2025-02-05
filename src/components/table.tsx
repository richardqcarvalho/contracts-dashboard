const Table = ({ className, ...props }: React.ComponentProps<'table'>) => (
  <div className='flex size-full p-16'>
    <div className='flex size-full overflow-y-auto rounded-md border'>
      <table
        className='relative w-full text-sm'
        {...props}
      />
    </div>
  </div>
)

const TableHead = ({ className, ...props }: React.ComponentProps<'thead'>) => (
  <thead
    className='sticky top-0 bg-blue-900'
    {...props}
  />
)

const TableHeaderRow = (props: React.ComponentProps<'tr'>) => <tr {...props} />

const TableHeader = ({ className, ...props }: React.ComponentProps<'th'>) => (
  <th
    className='h-12 px-4 text-left align-middle text-base font-bold'
    {...props}
  />
)

const TableBody = ({ className, ...props }: React.ComponentProps<'tbody'>) => (
  <tbody
    className='mt-12'
    {...props}
  />
)

const TableBodyRow = ({ className, ...props }: React.ComponentProps<'tr'>) => (
  <tr
    className='cursor-pointer border-b transition last:border-0 hover:bg-blue-800'
    {...props}
  />
)

const TableCell = ({ className, ...props }: React.ComponentProps<'td'>) => (
  <td
    className='p-4 align-middle'
    {...props}
  />
)

export {
  Table,
  TableBody,
  TableBodyRow,
  TableCell,
  TableHead,
  TableHeader,
  TableHeaderRow,
}
