const infoIngresso = JSON.parse(localStorage.getItem('cadastro'))

const dataNascimento = new Date(infoIngresso.birth)
const diaNascimento = dataNascimento.getUTCDate()
const mesNascimento = dataNascimento.getUTCMonth() + 1
const anoNascimento = dataNascimento.getUTCFullYear()

const ingresso = document.querySelector('.ingresso-comprado')

console.log(mesNascimento)

ingresso.innerHTML = `
    Nome: ${infoIngresso.nome}
    Data de Nascimento: ${diaNascimento}/${mesNascimento}/${anoNascimento} 
    Setor: ${infoIngresso.tickets}
`
