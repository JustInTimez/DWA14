import { html, css, LitElement } from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js";

class CounterComponent extends LitElement {
  static styles = css`
    .counter {
      font-size: 48px;
      text-align: center;
    }

    .minimum {
      color: red;
    }

    .normal {
      color: green;
    }

    .maximum {
      color: yellow;
    }
  `;

  static properties = {
    counter: { type: Number },
  };

  constructor() {
    super();
    this.counter = 5; // Initial counter value
  }

  incrementCounter() {
    if (this.counter < 10) {
      this.counter++;
    }
  }

  decrementCounter() {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  render() {
    let counterClass;
    if (this.counter === 0) {
      counterClass = "minimum";
    } else if (this.counter >= 10) {
      counterClass = "maximum";
    } else {
      counterClass = "normal";
    }

    return html`
      <div class="counter ${counterClass}">${this.counter}</div>
      <button @click=${this.decrementCounter}>-</button>
      <button @click=${this.incrementCounter}>+</button>
    `;
  }
}

customElements.define("counter-component", CounterComponent);
