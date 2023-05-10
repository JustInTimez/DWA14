import {
  css,
  html,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js";
import { store, increment, decrement } from "../model/store.js";

class Counter extends LitElement {
  static styles = css`
    .counter {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    .counter-value {
      font-size: 6rem;
      font-weight: 900;
      color: var(--color-white);
    }

    .counter-actions {
      display: flex;
      margin-top: 1rem;
    }

    button {
      background-color: var(--color-medium-grey);
      color: var(--color-light-grey);
      font-size: 2rem;
      padding: 1rem 2rem;
      border: none;
      border-radius: 4px;
      margin: 0 0.5rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: var(--color-light-grey);
    }
  `;

  static properties = {
    value: { type: Number },
  };

  constructor() {
    super();
    this.value = store.getState().value;
    store.subscribe(() => {
      this.value = store.getState().value;
    });
  }

  handleIncrement() {
    store.dispatch(increment());
  }

  handleDecrement() {
    store.dispatch(decrement());
  }

  render() {
    return html`
      <div class="counter">
        <span class="counter-value">Counter Value: ${this.value}</span>
        <div class="counter-actions">
          <button @click=${this.handleIncrement}>+</button>
          <button @click=${this.handleDecrement}>-</button>
        </div>
      </div>
    `;
  }
}

customElements.define("counter-component", Counter);
