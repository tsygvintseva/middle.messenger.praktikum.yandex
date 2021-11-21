import Handlebars from "handlebars";
import messageIncomingTemplate from "./message-incoming.tmpl";

const messageIncoming = Handlebars.compile(messageIncomingTemplate);

Handlebars.registerPartial("messageIncoming", messageIncoming);

export default messageIncoming;
