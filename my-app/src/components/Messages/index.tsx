import { RootState } from "../../types/chat";
import { useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import localforage from "localforage";
import "./Messages.css";

const Messages = ({ messages, myName }: any) => {
  const lastMessageRef: any = useRef(null);
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ul className="messages-container">
      {messages.map((data: any, index: any) => {
        const classes =
          myName.userName === data.author.userName
            ? "message__item"
            : "message__item message__item_get";
        return (
          <li className={classes} key={index} ref={lastMessageRef}>
            <Message data={data} />
          </li>
        );
      })}
    </ul>
  );
};
export default Messages;
