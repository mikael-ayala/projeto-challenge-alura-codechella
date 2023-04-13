const boxPergunta = document.querySelectorAll('.informacoes__perguntas__box__pergunta')
const boxResposta = document.querySelectorAll('.informacoes__perguntas__box__resposta')
const dropdownIcon = document.querySelectorAll('.informacoes__perguntas__box__pergunta__icon')

boxPergunta.forEach((e, index) =>
  e.addEventListener('click', element => {
    if (boxResposta[index].classList.contains('informacoes__perguntas__box__resposta')) {
      boxResposta[index].classList.remove('informacoes__perguntas__box__resposta')
      boxResposta[index].classList.add('informacoes__perguntas__box__resposta-show')
      dropdownIcon[index].style.transform = 'rotate(180deg)'
      
    } else if (boxResposta[index].classList.contains('informacoes__perguntas__box__resposta-show')) {
      boxResposta[index].classList.remove('informacoes__perguntas__box__resposta-show')
      boxResposta[index].classList.add('informacoes__perguntas__box__resposta')
      dropdownIcon[index].style.transform = 'rotate(0deg)'
    }
  })
)
