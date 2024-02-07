export const parseData = (obj: any) => {
  const newObject: any = {}

  // Obtener las claves del objeto original
  const keys = Object.keys(obj)

  // Construir el nuevo objeto
  keys.forEach(key => {
    const value = obj[key].value
    newObject[key] = value
  })
  return newObject
}
