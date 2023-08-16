const buttonHamburger = document.querySelector('.navigation__menu-bar--js')

const clickHamburgerNav = (e) => {
    const navigation = document.querySelector('.navigation--js');
    navigation.classList.toggle('navigation--open');
}

buttonHamburger.addEventListener('click', clickHamburgerNav)