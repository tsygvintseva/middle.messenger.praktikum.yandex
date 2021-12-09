import Block from '../../modules/block';
import messageFormTmpl from './message-form.tmpl';
import './message-form.scss';


export class MessageForm extends Block {
  constructor(props?: any) {
    super(props);
  }

  render(): Element {
    // @ts-ignore
    return this.compile(messageFormTmpl, this.props);
  }
}
