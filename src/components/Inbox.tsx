import React from "react";
import Moment from "react-moment";

interface SingleChat {
  id: number;
  fromUser: string;
  lastMessage: string;
  lastMessageDate: number;
}

interface InboxProps {
  chats: SingleChat[];
}

const Inbox: React.FC<InboxProps> = props => {
  const handleChatClick = (chatId: number) => {
    // props.selectChatMessages(chatId)
  };

  return (
    <div className="w-100 h-100 overflow-y-scroll">
      {props.chats.map(chat => (
        <div
          key={chat.id}
          className="border-bottom p-1"
          onClick={() => handleChatClick(chat.id)}
        >
          <div className="d-flex justify-content-between">
            <span>{chat.fromUser}</span>
            <span>
              <Moment>{chat.lastMessageDate}</Moment>
            </span>
          </div>
          <p className="text-truncate">{chat.lastMessage}</p>
        </div>
      ))}
    </div>
  );
};

export default Inbox;
