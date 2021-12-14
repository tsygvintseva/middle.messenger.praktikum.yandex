import * as Handlebars from 'handlebars';
import messageIncomingTemplate from './message.tmpl';

const message = Handlebars.compile(messageIncomingTemplate);

Handlebars.registerPartial('message', message);

export default message;
