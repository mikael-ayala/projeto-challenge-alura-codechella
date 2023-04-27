import maiorDeIdade from "./valida-idade.js"

const camposFormulario = document.querySelectorAll('[required]')

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
    }
}

camposFormulario.forEach((campo) => {
    campo.addEventListener('blur', () => {
        let mensagem = ''
        campo.setCustomValidity('')

        if (campo.name == 'birth' && campo.value != '') {
            maiorDeIdade(campo)
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