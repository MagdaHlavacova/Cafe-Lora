import './style.css';

export const Layer = (props) => {
  return `<div class="drink__cup">
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
</div>`;
};
