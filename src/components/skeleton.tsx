const SkeletonRow = (props: { count: number }) => (
  <>
    {[...Array(props.count)].map((_element, index) => (
      <div
        key={index}
        className='h-6 w-full max-w-96 bg-white/10'
      />
    ))}
  </>
)

const SkeletonWrapper = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => (
  <div
    className='absolute top-0 flex h-full w-full animate-pulse flex-col items-center justify-center gap-4 overflow-hidden p-10'
    {...props}
  />
)

export { SkeletonRow, SkeletonWrapper }
