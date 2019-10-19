export function main(...components) {
  components.forEach(
    component => customElements.define(component.selector, component));
}


