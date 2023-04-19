import React from "react";
import "./MessageControlPanel.css";
import { replyMessage } from "../../store/store";
import { useDispatch } from "react-redux";
import { messageInterfase } from "../../types";
type myProps = {
  message: messageInterfase;
};
const MessageControlPanel: React.FunctionComponent<myProps> = ({ message }) => {
  const dispatch = useDispatch();
  const replyClickHandler = (e: React.FormEvent<HTMLLIElement>) => {
    // delete message?.file?.src
    dispatch(replyMessage(message));
  };
  return (
    <div className="control-panel">
      <ul className="control-panel__items">
        <li className="control-panel__item" onClick={replyClickHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M28.88 30a1 1 0 0 1-.88-.5A15.19 15.19 0 0 0 15 22v6a1 1 0 0 1-.62.92a1 1 0 0 1-1.09-.21l-12-12a1 1 0 0 1 0-1.42l12-12a1 1 0 0 1 1.09-.21A1 1 0 0 1 15 4v6.11a17.19 17.19 0 0 1 15 17a16.34 16.34 0 0 1-.13 2a1 1 0 0 1-.79.86ZM14.5 20A17.62 17.62 0 0 1 28 26a15.31 15.31 0 0 0-14.09-14a1 1 0 0 1-.91-1V6.41L3.41 16L13 25.59V21a1 1 0 0 1 1-1h.54Z"
            />
          </svg>
        </li>
      </ul>
    </div>
  );
};
export default MessageControlPanel;
