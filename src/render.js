import { render } from "lit-html";
import { ref, effect } from "@vue/reactivity/dist/reactivity.esm-browser.js";

export default function (App, initial, target) {
  const count = ref(initial.count);
  effect(() => render(App(count), target));
}
