import './style.css';
import { Layer } from '../Layer';

export const Drink = (props) => {
  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');
  // drink product
  const drinkprodElm = document.createElement('div');
  drinkprodElm.classList.add('drink__product');
  drinkElm.appendChild(drinkprodElm);
  // drink cup
  const drinkcupElm = document.createElement('div');
  drinkcupElm.classList.add('drink__cup');
  drinkprodElm.appendChild(drinkcupElm);
  const imgElm = document.createElement('img');
  imgElm.src = `/assets/cups/${props.id}.png`;
  drinkcupElm.appendChild(imgElm);
  // drink info
  const drinkinfoElm = document.createElement('div');
  drinkinfoElm.classList.add('drink__info');
  drinkprodElm.appendChild(drinkinfoElm);
  const h3Elm = document.createElement('h3');
  h3Elm.textContent = props.name;
  drinkinfoElm.appendChild(h3Elm);

  props.layers.forEach((layer) => {
    drinkinfoElm.appendChild(Layer(layer));
  });

  const controlsElm = document.createElement('div');
  controlsElm.classList.add('drink__controls');
  const buttonElm = document.createElement('button');
  buttonElm.classList.add('order-btn');
  buttonElm.textContent = 'Objednat';
  buttonElm.addEventListener('click', () => {
    if (props.ordered === false) {
      buttonElm.textContent = 'Zrušit';

      drinkcupElm.classList.add('drink__cup--selected');
      props.ordered = true;
    } else {
      buttonElm.textContent = 'Objednat';

      drinkcupElm.classList.remove('drink__cup--selected');
      props.ordered = false;
    }
  });
  controlsElm.appendChild(buttonElm);
  drinkElm.appendChild(controlsElm);

  return drinkElm;
};

/* id: 'cappuccino',
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
    ], */

{
  /* <div class="drink__product">
<div class="drink__cup">
  <img src="/assets/cups/cappuccino.png" />
</div>
<div class="drink__info">
  <h3>Cappuccino</h3>
  <div class="layer">
    <div
      class="layer__color"
      style="background-color: #feeeca"
    ></div>
    <div class="layer__label">mléčná pěna</div>
  </div>
  <div class="layer">
    <div
      class="layer__color"
      style="background-color: #fed7b0"
    ></div>
    <div class="layer__label">teplé mléko</div>
  </div>

  <div class="layer">
    <div
      class="layer__color"
      style="background-color: #613916"
    ></div>
    <div class="layer__label">espresso</div>
  </div>
</div>
</div>
<div class="drink__controls">
<button class="order-btn">Objednat</button>
</div> */
}
