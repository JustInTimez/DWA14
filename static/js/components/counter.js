import { html, css, LitElement } from "../../libs/lit-html.js";

class Counter extends LitElement {
  static styles = css`
    .counter {
      text-align: center;
      font-size: 4rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }
  `;

  static properties = {
    count: { type: Number },
    min: { type: Number },
    max: { type: Number },
  };

  constructor() {
    super();
    this.count = 0;
    this.min = 0;
    this.max = 10;
  }

  render() {
    return html` <div class="counter">${this.count}</div> `;
  }
}

customElements.define("tally-counter", Counter);
