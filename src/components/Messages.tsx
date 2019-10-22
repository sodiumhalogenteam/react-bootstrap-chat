import React from "react";
import Moment from "react-moment";

export enum MessageType {
  OUTGOING,
  INCOMING
}

interface SingleMessage {
  id: number;
  chatId: number;
  from: string;
  date: number;
  message: string;
  messageType: MessageType;
}

interface MessagesProps {
  messages: SingleMessage[];
}

const Messages: React.FC<MessagesProps> = props => {
  return (
    <div className="p-1">
      {props.messages.map(msg => (
        <div
          className={`${msg.messageType === MessageType.OUTGOING &&
            "d-flex justify-content-end"}`}
        >
          <div className="col-md-7">
            <div
              className={`${msg.messageType === MessageType.OUTGOING &&
                "text-right"}`}
            >
              <span>{msg.from}</span>{" "}
              <span>
                <Moment format="hh:mm a MM/DD/YY">{msg.date}</Moment>
              </span>
            </div>
            <p
              className={`p-2 text-light ${
                msg.messageType === MessageType.OUTGOING
                  ? "bg-primary"
                  : "bg-dark"
              }`}
            >
              {msg.message}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
