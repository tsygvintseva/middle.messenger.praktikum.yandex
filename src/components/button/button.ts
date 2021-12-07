import * as Handlebars from 'handlebars';

import buttonTmpl from './button.tmpl';
import Block from '../../modules/block';
import './button.scss';

export class Button extends Block {
  constructor(props: any) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(buttonTmpl);
    Handlebars.registerPartial('button', template);

    return template(this.props);
  }
}
