export const getContracts = async () => {
  const response = await fetch('http://localhost:4000/contracts')
  const contracts = await response.json()

  return contracts
}
