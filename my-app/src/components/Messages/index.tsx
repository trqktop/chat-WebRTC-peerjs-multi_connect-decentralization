import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import localforage from "localforage";
import "./Messages.css";
import { TMessage } from "../../store/store";
import MessagesContainer from "../../containers/MessagesContainer";

type TFile = {
  file: {
    file: string;
    type: string;
  };
  id: string;
};

const Messages = ({ messages, myName }: any) => {
  const lastMessageRef: any = useRef(null);
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ul className="message">
      {messages.map((data: any, index: any) => {
        const { user }: any = { ...data };
        const classes =
          myName === user ? "message__item" : "message__item message__item_get";
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