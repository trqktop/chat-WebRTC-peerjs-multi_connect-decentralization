import React from "react";
import { RootState } from "../../types/chat";
import { useSelector } from "react-redux";
import Messages from "../../components/Messages";
import "./MessagesContainer.css";
import { messageInterfase, userInterface } from "../../types";
const MessagesContainer: React.FunctionComponent = () => {
  // async function mergeMessagesWithIDB(messages: any) {
  //   const result = localforage
  //     .getItem("files")
  //     .then((dbFiles: any) => {
  //       if (dbFiles.length > -1) {
  //         const resultMessages = messages.map((message: TMessage) => {
  //           const index = dbFiles.findIndex((file: TFile) => {
  //             return message.id === file.id;
  //           });
  //           if (index > -1) {
  //             return { ...message, file: dbFiles[index].file };
  //           }
  //           return message;
  //         });
  //         return resultMessages;
  //       }
  //     })
  //     .then((localState) => {
  //       return localState;
  //     });
  //   return await result;
  // }
  const messages: Array<messageInterfase> = useSelector(
    (state: RootState) => state.chat.messages
  );
  const myName: userInterface | null = useSelector(
    (state: RootState) => state.chat.userName
  );

  // const [messagesWithFiles, setMessagesWithFiles]: Awaited<Promise<any>> =
  //   useState(null);
  // useEffect(() => {
  //   if (messages.length) {
  //     const getMessages = mergeMessagesWithIDB(messages);
  //     getMessages.then((mergedMessages) => {
  //       setMessagesWithFiles(mergedMessages);
  //     });
  //   }
  // }, [messages]);
  if (messages.length && myName)
    return (
      <ul className="messages-container">
        <Messages messages={messages} myName={myName} />
      </ul>
    );
  return null;
};

export default MessagesContainer;
