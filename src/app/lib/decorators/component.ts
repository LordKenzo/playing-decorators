interface IComponent {
  selector: string,
  template: string
}
export function Component(a: IComponent) {
  return function <T extends { new(...args: any[]): {} }>(constr: T) {
    const template = document.createElement("template");
    template.innerHTML = a.template
    return class extends HTMLElement {
      static selector = a.selector;
      constructor() {
        super()
        this.attachShadow({ mode: "open" });
        if (this.shadowRoot) {
          this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
      }
    }
  }
}