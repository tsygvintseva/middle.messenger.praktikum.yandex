import Handlebars from "handlebars";
import chatAttachFileTemplate from "./chat-attach-file.tmpl";

const chatAttachFile = Handlebars.compile(chatAttachFileTemplate);

Handlebars.registerPartial("chatAttachFile", chatAttachFile);

export default chatAttachFile;
