const SkeletonRow = () => <div className='h-6 w-96 bg-white/10' />

const SkeletonWrapper = (props: React.HTMLAttributes<HTMLElement>) => (
  <div className='flex h-full w-full animate-pulse flex-col items-center justify-center gap-2'>
    {props.children}
  </div>
)

export { SkeletonRow, SkeletonWrapper }
