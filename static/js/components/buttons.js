import { css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class ButtonsComponent extends LitElement {
  static styles = css`
    .button-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }

    button {
      font-size: 24px;
      margin: 0 5px;
      padding: 10px 20px;
      border-radius: 8px;
      background-color: #4285f4; /* Blue */
      color: white;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #3367d6; /* Darker Blue */
    }

    button:active {
      background-color: #2454b4; /* Even Darker Blue */
    }
  `;

  constructor() {
    super();
    this.addEventListener("click", this.handleClick);
  }

  handleClick(event) {
    const target = event.target;
    if (target.tagName === "BUTTON") {
      const action = target.textContent;
      if (action === "-") {
        this.dispatchEvent(new CustomEvent("decrement"));
      } else if (action === "+") {
        this.dispatchEvent(new CustomEvent("increment"));
      }
    }
  }
  
}

customElements.define('buttons-component', ButtonsComponent);
