import './style.css';

console.log('funguju!');

const navElm = document.querySelector('nav');

const navBtnElm = document.querySelector('#nav-btn');

navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

const navigaceClosed = () => {
  navElm.classList.add('nav-closed');
};

const AllNavigaceElm = navElm.querySelectorAll('a');
for (let i = 0; i < AllNavigaceElm.length; i += 1) {
  AllNavigaceElm[i].addEventListener('click', navigaceClosed);
}

let ordered = false;

const buttonElm = document.querySelector('.order-btn');
buttonElm.addEventListener('click', () => {
  if (ordered === false) {
    buttonElm.textContent = 'Zrušit';

    const drinkCupElm = document.querySelector('.drink__cup');
    drinkCupElm.classList.add('drink__cup--selected');
    ordered = true;
  } else {
    buttonElm.textContent = 'Objednat';

    const drinkCupElm = document.querySelector('.drink__cup');
    drinkCupElm.classList.remove('drink__cup--selected');
    ordered = false;
  }
});
