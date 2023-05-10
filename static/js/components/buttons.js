import {
  css,
  html,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js";
import { store, increment, decrement } from "../model/store.js";

class IncrementButton extends LitElement {
  static styles = css`
    button {
      background-color: var(--color-green);
      color: var(--color-white);
      font-size: 1.5rem;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: var(--color-dark-green);
    }
  `;

  handleClick() {
    store.dispatch(increment());
  }

  render() {
    return html` <button @click=${this.handleClick}>+</button> `;
  }
}

customElements.define("increment-button", IncrementButton);

class DecrementButton extends LitElement {
  static styles = css`
    button {
      background-color: var(--color-red);
      color: var(--color-white);
      font-size: 1.5rem;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: var(--color-dark-red);
    }
  `;

  handleClick() {
    store.dispatch(decrement());
  }

  render() {
    return html` <button @click=${this.handleClick}>-</button> `;
  }
}

customElements.define("decrement-button", DecrementButton);

class ResetButton extends LitElement {
    static styles = css`
        button {
            background-color: var(--color-blue);
            color: var(--color-white);
            font-size: 1.5rem;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        button:hover {
            background-color: var(--color-dark-blue);
        }
    `;

    handleClick() {
        store.dispatch(reset());
    }

    render() {
        return html`
        <button @click=${this.handleClick}>
            Reset
        </button>
        `;
    }
}

customElements.define('reset-button', ResetButton)