import React from "react";
import { createGlobalStyle } from "styled-components";

// components
import Inbox from "./components/Inbox";
import Messages, { MessageType } from "./components/Messages";

const GlobalStyle = createGlobalStyle`
  html { height: 100vh; }

  body, #root {
    height: 100%;
  }

  .overflow-y-scroll {overflow-y: auto;}
`;

const chatsData = [
  {
    id: 0,
    fromUser: "Molly",
    lastMessage: "Hey, I got your message.",
    lastMessageDate: 1571756685693
  },
  {
    id: 1,
    fromUser: "Brantley",
    lastMessage:
      "What is the best time to come in today for paperwork? I believe I still have a few to address.",
    lastMessageDate: 1571694234465
  },
  {
    id: 2,
    fromUser: "Brantley",
    lastMessage:
      "What is the best time to come in today for paperwork? I believe I still have a few to address.",
    lastMessageDate: 1571693218892
  },
  {
    id: 3,
    fromUser: "Brantley",
    lastMessage:
      "What is the best time to come in today for paperwork? I believe I still have a few to address.",
    lastMessageDate: 1571693218892
  },
  {
    id: 4,
    fromUser: "William",
    lastMessage: "Is the interview today?",
    lastMessageDate: 1571693218892
  }
];

const messagesData = [
  {
    id: 0,
    chatId: 0,
    messageType: MessageType.INCOMING,
    date: 1571693218892,
    message:
      "What is the best time to come in today for paperwork? I believe I still have a few to address.",
    from: "Jane Smith"
  },
  {
    id: 0,
    chatId: 0,
    date: 1571693218892,
    messageType: MessageType.OUTGOING,
    message: "6pm will work",
    from: "Rachel"
  },
  {
    id: 0,
    chatId: 0,
    date: 1571693218892,
    messageType: MessageType.INCOMING,
    message: "Could we do 6:30pm today?",
    from: "Jane Smith"
  },
  {
    id: 0,
    chatId: 0,
    date: 1571693218892,
    messageType: MessageType.INCOMING,
    message: "I don't get off until 6pm.",
    from: "Jane Smith"
  },
  {
    id: 0,
    chatId: 0,
    date: 1571693218892,
    messageType: MessageType.OUTGOING,
    message: "Let me look at my calendar. I think that sould work fine.",
    from: "Rachel"
  }
];

const App: React.FC = () => {
  const [selectedMessages, setSelectedMessages] = React.useState<number>(-1);
  return (
    <div className="App h-100 d-flex">
      <GlobalStyle />
      <div className="h-100 w-50">
        <Inbox chats={chatsData} />
      </div>
      <div className="h-100 w-50">
        <Messages messages={messagesData} />
      </div>
    </div>
  );
};

export default App;
