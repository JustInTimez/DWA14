import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import './components/counter.js';
import './components/buttons.js';

class TallyApp extends LitElement {
  static styles = css`
    body {
      background-color: #f5f5f5;
      margin: 0;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    }

    h1 {
      font-size: 24px;
      margin: 0;
      margin-bottom: 20px;
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
      this.requestUpdate(); // Request update to reflect the new counter value
    }
  }

  decrementCounter() {
    if (this.counter > 0) {
      this.counter--;
      this.requestUpdate(); // Request update to reflect the new counter value
    }
  }

  render() {
    return html`
      <div class="container">
        <h1>Tally App</h1>
        <counter-component .counter=${this.counter}></counter-component>
        <buttons-component
          @decrement=${this.decrementCounter.bind(this)}
          @increment=${this.incrementCounter.bind(this)}
        ></buttons-component>
      </div>
    `;
  }
}

customElements.define('tally-app', TallyApp);
