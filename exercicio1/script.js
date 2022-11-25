const objeto = {
  nome: 'astrodev',
  profissao: 'Dev das estrelas',
  username: 'astrodev_labenu',
  senha: 'melhorDeTodos',
}

const loop = (obj) => {
  for (i in obj) {
    obj[i] = obj[i].toUpperCase()
  }
  return obj
}

const fun = (obj) => {
  const arr = Object.keys(obj).map((prop) => {
    return objeto[prop].toUpperCase()
  })
  return arr
}

const funn = () => {
  const txt = `${objeto.nome}, ${objeto.profissao}, ${objeto.username}, ${objeto.senha}`
  return txt
}

const funnn = (obj, callback) => {
  return console.log(callback(obj))
}

funnn(objeto, fun)
funnn(objeto, funn)
funnn(objeto, loop)
