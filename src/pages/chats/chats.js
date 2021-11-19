import Handlebars from "handlebars";
import chatsTemplate from "./chats.tmpl";
import "./chats.scss";

const chats = Handlebars.compile(chatsTemplate);

const data = {
  text: "Тут будет список чатов и лента переписки",
};

export default chats(data);
