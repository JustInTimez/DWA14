import {
  LitElement,
  html,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js";

const Counter = () => {
  let value = 0;
  let state = "Normal";

  const increment = () => {
    
  };

  const decrement = () => {
    
  };

  return html` add my counter logic here? `;
};

// Create styles later...
Counter.styles = css`
  add my counter styles here?
`;

customElements.define("counter-component", Counter);
