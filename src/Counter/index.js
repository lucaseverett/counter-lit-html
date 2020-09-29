import { html } from "lit-html";
import styles from "./styles";

export default function Counter(count) {
  function inc() {
    count.value += 1;
  }

  function dec() {
    if (count.value !== 0) count.value -= 1;
  }

  return html`<div class=${styles}>
    <button @click=${dec} class="dec">-</button>
    <span class="count">${count.value}</span>
    <button @click=${inc} class="inc">+</button>
  </div>`;
}
