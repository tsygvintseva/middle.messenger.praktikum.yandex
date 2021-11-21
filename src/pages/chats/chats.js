import Handlebars from "handlebars";
import chatsTemplate from "./chats.tmpl";
import "./chats.scss";
import "../../components/search/search";
import "../../components/chat-dialogue/chat-dialogue";

const chats = Handlebars.compile(chatsTemplate);

const data = {
  chatDialogue: [
    {
      chatName: "Андрей",
      chatImg: true,
      chatUnread: true,
      chatUnreadCount: 2,
    },
    {
      chatName: "Киноклуб",
      chatYourMessage: true,
      chatSticker: true,
    },
    {
      chatName: "Илья",
      chatMessage: true,
      chatMessageText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus egestas tortor, ut placerat mauris rutrum a.",
      chatUnread: true,
      chatUnreadCount: 4,
    },
    {
      chatName: "Вадим",
      chatSticker: true,
      chatMessage: true,
      chatMessageText: "Круто!",
    },
    {
      chatName: "тет-а-теты",
      chatMessage: true,
      chatMessageText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus egestas tortor, ut placerat mauris rutrum a.",
    },
    {
      chatName: "1, 2, 3",
      chatMessage: true,
      chatMessageText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus egestas tortor, ut placerat mauris rutrum a.",
    },
    {
      chatName: "Design Destroyer",
      chatMessage: true,
      chatMessageText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus egestas tortor, ut placerat mauris rutrum a.",
    },
    {
      chatName: "Day.",
      chatMessage: true,
      chatMessageText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus egestas tortor, ut placerat mauris rutrum a.",
    },
    {
      chatName: "тет-а-теты",
      chatMessage: true,
      chatMessageText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus egestas tortor, ut placerat mauris rutrum a.",
    },
    {
      chatName: "1, 2, 3",
      chatMessage: true,
      chatMessageText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus egestas tortor, ut placerat mauris rutrum a.",
    },
    {
      chatName: "Design Destroyer",
      chatMessage: true,
      chatMessageText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus egestas tortor, ut placerat mauris rutrum a.",
    },
    {
      chatName: "Day.",
      chatMessage: true,
      chatMessageText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus egestas tortor, ut placerat mauris rutrum a.",
    },
  ],
};

export default chats(data);
