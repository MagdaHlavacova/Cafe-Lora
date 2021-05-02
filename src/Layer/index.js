import './style.css';

/* <div class="layer">
    <div
      class="layer__color"
      style="background-color: #feeeca"
    ></div>
    <div class="layer__label">mléčná pěna</div>
  </div> */

export const Layer = (props) => {
  const Element = document.createElement('div');
  Element.classList.add('layer');
  const colorElm = document.createElement('div');
  colorElm.classList.add('layer__color');
  colorElm.style = `background-color: ${props.color}`;
  Element.appendChild(colorElm);
  const labelElm = document.createElement('div');
  labelElm.classList.add('layer__label');
  labelElm.innerText = props.label;
  Element.appendChild(labelElm);

  return Element;
};
