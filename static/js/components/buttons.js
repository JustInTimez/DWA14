import { css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class ButtonsComponent extends LitElement {
  static styles = css`
    .button-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button {
      font-size: 24px;
      margin: 0 5px;
    }
  `;

  constructor() {
    super();
    this.addEventListener('click', this.handleClick);
  }

  handleClick(event) {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
      const action = target.textContent;
      if (action === '-') {
        this.dispatchEvent(new CustomEvent('decrement'));
      } else if (action === '+') {
        this.dispatchEvent(new CustomEvent('increment'));
      }
    }
  }
}

customElements.define('buttons-component', ButtonsComponent);
