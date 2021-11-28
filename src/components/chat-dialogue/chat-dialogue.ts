import Handlebars from 'handlebars';
import chatDialogueTemplate from './chat-dialogue.tmpl';
import './chat-dialogue.scss';

const chatDialogue = Handlebars.compile(chatDialogueTemplate);

Handlebars.registerPartial('chatDialogue', chatDialogue);

export default chatDialogue;
