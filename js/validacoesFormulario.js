import maiorDeIdade from "./valida-idade.js"

const camposFormulario = document.querySelectorAll('[required]')
const formulario = document.querySelector('[data-formulario]')

formulario.addEventListener('submit', e => {
    e.preventDefault()
    
    const listaRespostas = {
        'nome': e.target.elements['nome'].value,
        'email': e.target.elements['email'].value,
        'tickets': e.target.elements['tickets'].value,
        'birth': e.target.elements['birth'].value
    }

    localStorage.setItem('cadastro', JSON.stringify(listaRespostas))

    window.location.href = './ingresso-comprado.html'
})


const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    birth: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    tickets: {
        customError: 'Por favor, escolha uma opção de ingresso.'
    }
}

camposFormulario.forEach((campo) => {
    campo.addEventListener('blur', () => {
        let mensagem = ''
        campo.setCustomValidity('')

        if (campo.name == 'birth' && campo.value != '') {
            maiorDeIdade(campo)
        }

        if (campo.name == 'tickets' && campo.value == 'Tipo de Ingresso') {
            campo.setCustomValidity('O usuário deve selecionar uma opção de ingresso')
        }

        tiposDeErro.forEach(erro => {
            if (campo.validity[erro]) {
                mensagem = mensagens[campo.name][erro]
                console.log(mensagem)
            }
        })

        const mensagemErro = campo.parentNode.querySelector('.mensagem-erro')
        const validadorDeInput = campo.checkValidity()

        if (!validadorDeInput) {
            mensagemErro.textContent = mensagem;
        } else {
            mensagemErro.textContent = ''
        }
    })

    campo.addEventListener('invalid', e => e.preventDefault())
})