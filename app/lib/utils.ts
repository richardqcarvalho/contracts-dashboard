import { ObjectParamsT } from '@/types/utils'
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

export const getObjectToQueryParams = (params?: ObjectParamsT) => {
  if (!params) return ''

  let body = ''
  const keys = Object.keys(params).filter(key => params[key])

  keys.forEach((key, index) => {
    if (index === 0) body += `?${key}=${params[key]}`
    else body += `&${key}=${params[key]}`
  })

  return body
}

export const parseInts = (numbers: string[]) =>
  numbers.map(number => (number ? parseInt(number) : 0))
