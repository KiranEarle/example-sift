export const getReturnPathDomain = (string) => {
  const index = string.indexOf('d=')

  const slicedString = string.substring(index)

  const indexEnd = slicedString.indexOf(';')

  const returnPathDomain = slicedString.substring(2, indexEnd)

  return returnPathDomain
}