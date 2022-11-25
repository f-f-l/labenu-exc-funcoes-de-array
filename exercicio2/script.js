const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const multiplicarPorTres = () => {
  const triplos = []
  const m = arr.map((num) => {
    return num * 3
  })
  triplos.push(m)
  return triplos
}

const dividirPorDois = () => {
  const metades = []
  const d = arr.map((num) => {
    return num / 2
  })
  metades.push(d)
  return metades
}

const imprimir = (obj, callback) => {
  return console.log(callback(obj))
}

imprimir(arr, multiplicarPorTres)
imprimir(arr, dividirPorDois)