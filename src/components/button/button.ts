import * as Handlebars from 'handlebars';

import Block from '../../modules/block';
import buttonTmpl from './button.tmpl';
import './button.scss';


// const button = Handlebars.compile(buttonTemplate);
//

//
// export default button;

export class Button extends Block {
  constructor(props: any) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(buttonTmpl);
    Handlebars.registerPartial('button', template);

    console.log(this.props)

    return template(this.props);
  }
}
