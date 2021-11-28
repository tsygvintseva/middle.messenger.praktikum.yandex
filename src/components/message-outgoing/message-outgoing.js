import Handlebars from 'handlebars';
import messageOutgoingTemplate from './message-outgoing.tmpl';

const messageOutgoing = Handlebars.compile(messageOutgoingTemplate);

Handlebars.registerPartial('messageOutgoing', messageOutgoing);

export default messageOutgoing;
