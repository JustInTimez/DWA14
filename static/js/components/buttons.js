import { html, css, LitElement } from "../../libs/lit-html.js";

class Buttons extends LitElement {
  static styles = css`
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
    const buttonsClasses = {
      buttons: true,
      'minimum-reached': this.count === this.min,
      'maximum-reached': this.count === this.max
    };
  
    return html`
      <div class=${classMap(buttonsClasses)}>
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

customElements.define("tally-buttons", Buttons);
