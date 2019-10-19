import { Component } from '../lib/decorators/component';

@Component({
  selector: 'my-comp',
  template: `
    <h1>Ciaone</h1>
    <lf-detail></lf-detail>
  `
})
export class GreetingComponent {

  constructor() {
  }
}

