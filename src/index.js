import './style.css';
import { Drink } from './Drink';

console.log('funguju!');

const navBtnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('nav');

navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

const navigaceElms = document.querySelectorAll('a');
for (let i = 0; i < navigaceElms.length; i += 1) {
  navigaceElms[i].addEventListener('click', () => {
    navElm.classList.add('nav-closed');
  });
}

const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
      {
        color: '#feeeca',
        label: 'mléčná pěna',
      },
      {
        color: '#fed7b0',
        label: 'teplé mléko',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
];

//TODO https://apps.kodim.cz/daweb/cafelora/api/drinks

const naplnData = (drinks) => {
  const drinkElm = document.querySelector('.drinks-list');
  drinks.forEach((drink) => {
    drinkElm.appendChild(Drink(drink));
  });
};
/* naplnData(drinks )*/

fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((response) => response.json())
  .then((json) => naplnData(json));
