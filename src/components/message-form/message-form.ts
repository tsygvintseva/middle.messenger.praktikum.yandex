import Handlebars from 'handlebars';
import messageFormTemplate from './message-form.tmpl';
import './message-form.scss';

const messageForm = Handlebars.compile(messageFormTemplate);

Handlebars.registerPartial('messageForm', messageForm);

export default messageForm;
