import { html, css, LitElement } from "lit";
import "./components/counter.js";
import "./components/buttons.js";

class TallyApp extends LitElement {
    static styles = css`
      :host {
        display: block;
        text-align: center;
        font-family: Arial, sans-serif;
        padding: 2rem;
      }
    `;
  
    static properties = {
      count: { type: Number },
      min: { type: Number },
      max: { type: Number },
    };
  
    constructor() {
      super();
      this.count = 5;
      this.min = 0;
      this.max = 10;
    }
  
    render() {
      const counterStyles = this.getCounterStyles();
  
      return html`
        <h1>Tally Count</h1>
        <tally-counter
          .count=${this.count}
          style=${counterStyles}
        ></tally-counter>
        <tally-buttons
          .count=${this.count}
          .min=${this.min}
          .max=${this.max}
          @count-updated=${this.handleCountUpdated}
        ></tally-buttons>
      `;
    }
  
    getCounterStyles() {
      if (this.count === this.min) {
        return "color: red;";
      } else if (this.count === this.max) {
        return "color: green;";
      } else {
        return "color: black;";
      }
    }
  
    handleCountUpdated(event) {
      this.count = event.detail;
    }
  }
  
  customElements.define("tally-app", TallyApp);
