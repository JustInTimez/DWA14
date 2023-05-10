import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import './components/counter.js';
import './components/buttons.js';

class TallyApp extends LitElement {
  static styles = css`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
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
