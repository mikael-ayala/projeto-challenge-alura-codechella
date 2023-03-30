let body = document.querySelector('body')
let buttonMenuNav = document.querySelector('.header__menu')
let iconMenuNav = document.querySelector('.header__menu__icon')
let listMenuNav = document.querySelector('.header__menu__list')

let menuIsOpen = false

buttonMenuNav.addEventListener('click', () => {
  if (!menuIsOpen) {
    iconMenuNav.style.backgroundImage = 'url(../img/close.png)'

    listMenuNav.classList.remove('header__menu__list')
    listMenuNav.classList.add('header__menu__list__show')

    body.classList.add('stop-scrolling')

    menuIsOpen = true
  } else {
    iconMenuNav.style.backgroundImage = 'url(../img/menu.png)'

    listMenuNav.classList.remove('header__menu__list__show')
    listMenuNav.classList.add('header__menu__list')

    body.classList.remove('stop-scrolling')

    menuIsOpen = false
  }
})
