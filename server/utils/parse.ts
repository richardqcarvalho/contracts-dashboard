export const parseDate = (dateString: string) => {
  const [dayString, monthString, yearString] = dateString.split('/')

  return new Date(`${yearString}-${monthString}-${dayString}`).toISOString()
}

export const parseValue = (valueString: string) => {
  const sanitizedValueString = valueString
    .replaceAll(/[^0-9]/g, '')
    .slice(0, -2)
  const valueNumber = parseInt(sanitizedValueString)

  return valueNumber
}
