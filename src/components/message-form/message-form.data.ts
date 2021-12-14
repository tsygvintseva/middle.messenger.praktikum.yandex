import FormValidator from '../../modules/form-validator';
import { Button } from '../button/button';

const validator = new FormValidator();

const BUTTON_PROPS = {
  isMessageForm: true,
  type: 'submit',
  events: {
    click: (evt: MouseEvent) => validator.onSubmit(evt, evt.target),
  },
}

export const MESSAGE_FORM_DATA = {
  button: new Button(BUTTON_PROPS)
}
