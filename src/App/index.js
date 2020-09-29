import { html } from "lit-html";
import styles from "./styles";
import Counter from "../Counter";

export default function App(count) {
  return html`<div class="${styles}">${Counter(count)}</div>`;
}
