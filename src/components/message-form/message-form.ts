import Block from '../../modules/block';
import messageFormTmpl from './message-form.tmpl';
import { Button } from '../button/button';
import { MESSAGE_FORM_DATA as data } from './message-form.data'
import './message-form.scss';

interface MessageFormProps {
  button: Button
}

export class MessageForm extends Block {
  constructor(props?: MessageFormProps) {
    super(props);
  }

  componentDidMount(): void {
    this.setProps(data);
  }

  render(): Element {
    return <Element>this.compile(messageFormTmpl, this.props);
  }
}
