const infoIngresso = JSON.parse(localStorage.getItem('cadastro'))

const dataNascimento = new Date(infoIngresso.birth)
const diaNascimento = dataNascimento.getUTCDate()
const mesNascimento = dataNascimento.getUTCMonth() + 1
const anoNascimento = dataNascimento.getUTCFullYear()

const setor = infoIngresso.tickets.charAt(0).toUpperCase() + infoIngresso.tickets.slice(1)
let setorAjustado = setor.replace('-', ' ')

const ingresso = document.querySelector('.ingresso-comprado__div')

const dataHoje = new Date()
let diaHoje = dataHoje.getUTCDate()
let mesHoje = dataHoje.getUTCMonth()+1

if (diaHoje <= 9) diaHoje = '0' + diaHoje
if (mesHoje <= 9) mesHoje = '0' + mesHoje

ingresso.innerHTML += `
<div class="ingresso-comprado__div__ticket">
  <div class="ingresso-comprado__div__ticket__header">
    <div class="ingresso-comprado__div__ticket__header__logo"></div>
    <div class="ingresso-comprado__div__ticket__header__icon"></div>
  </div>
  <div class="ingresso-comprado__div__ticket__qr-code"></div>
  <h1 class="ingresso-comprado__div__ticket__nome">${infoIngresso.nome}</h1>
  <h4 class="ingresso-comprado__div__ticket__tipo-ingresso">Ingresso</h4>
  <h4 class="ingresso-comprado__div__ticket__setor">Setor ${setorAjustado}</h4>
  <h4 class="ingresso-comprado__div__ticket__data">Data: ${diaHoje}/${mesHoje}/${dataHoje.getUTCFullYear()}</h4>
  <h4 class="ingresso-comprado__div__ticket__local">São Paulo-SP</h4>
</div>
`
