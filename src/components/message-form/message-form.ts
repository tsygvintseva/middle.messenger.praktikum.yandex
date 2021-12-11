import Block from '../../modules/block';
import messageFormTmpl from './message-form.tmpl';
import FormValidator from '../../modules/form-validator';
import { Button } from '../button/button';
import './message-form.scss';

const validator = new FormValidator();

const BUTTON = {
  isMessageForm: true,
  buttonType: 'submit',
  events: {
    click: (evt: MouseEvent) => validator.onSubmit(evt, evt.target),
  },
}

const MESSAGE_FORM_DATA = {
  button: new Button(BUTTON)
}

export class MessageForm extends Block {
  constructor(props?: any) {
    super(props);
  }

  componentDidMount(): void {
    this.setProps(MESSAGE_FORM_DATA);
  }

  render(): Element {
    // @ts-ignore
    return this.compile(messageFormTmpl, this.props);
  }
}
