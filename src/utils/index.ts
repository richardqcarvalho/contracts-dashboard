export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('pt-br')

export const formatValue = (value: number) =>
  value.toLocaleString('pt-br', {
    currency: 'BRL',
    style: 'currency',
  })
