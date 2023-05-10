import { html, css, LitElement } from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js";

class TallyApp extends LitElement {
  static styles = css`
    .counter {
      text-align: center;
      font-size: 4rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }

    .buttons {
      display: flex;
      justify-content: center;
    }

    button {
      font-size: 2rem;
      padding: 0.5rem 1rem;
      margin: 0 0.5rem;
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
    return html`
      <div class="counter">${this.count}</div>
      <div class="buttons">
        <button @click=${this.decrement} ?disabled=${this.count <= this.min}>
          -
        </button>
        <button @click=${this.increment} ?disabled=${this.count >= this.max}>
          +
        </button>
        <button @click=${this.reset}>Reset</button>
      </div>
    `;
  }

  increment() {
    if (this.count < this.max) {
      this.count++;
      this.requestUpdate();
    }
  }

  decrement() {
    if (this.count > this.min) {
      this.count--;
      this.requestUpdate();
    }
  }

  reset() {
    this.count = this.min;
    this.requestUpdate();
  }
}

customElements.define("tally-app", TallyApp);
