import {
  AmountByStatusT,
  AmountByTypeT,
  ContractT,
  GetAmountByStatusT,
  GetAmountByTypeT,
} from '@/app/types/contract'
import { ObjectParamsT } from '@/app/types/utils'
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

export const getAmountByStatus: GetAmountByStatusT = (contracts: ContractT[]) =>
  contracts.reduce((amounts, contract) => {
    const status = amounts.find(amount => amount.status === contract.status)

    if (status) amounts[amounts.indexOf(status)].amount += 1
    else amounts.push({ status: contract.status, amount: 1 })

    return amounts
  }, [] as AmountByStatusT)

export const getAmountByType: GetAmountByTypeT = (contracts: ContractT[]) =>
  contracts.reduce((amounts, contract) => {
    const type = amounts.find(amount => amount.type === contract.type)

    if (type) amounts[amounts.indexOf(type)].amount += 1
    else amounts.push({ type: contract.type, amount: 1 })

    return amounts
  }, [] as AmountByTypeT)
