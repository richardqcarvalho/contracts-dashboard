import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('pt-br')

export const formatValue = (value: number) =>
  value.toLocaleString('pt-br', {
    currency: 'BRL',
    style: 'currency',
  })
