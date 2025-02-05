import clsx from 'clsx/lite'
import { twMerge } from 'tailwind-merge'

export const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
) => {
  const { className, ...rest } = props

  return (
    <button
      className={twMerge(
        clsx(
          'cursor-pointer rounded-md border border-white px-4 py-3 text-sm text-white transition outline-none hover:bg-white hover:text-blue-900',
          className,
        ),
      )}
      {...rest}
    />
  )
}
