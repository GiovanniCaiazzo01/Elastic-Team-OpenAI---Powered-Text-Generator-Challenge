import { useState, createContext } from "react";
import PropTypes from "prop-types";
import HTTPClient from "../../api/HTTPClient.js";
const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [userMessage, setUserMessage] = useState([]);
  const [iaMessage, setIaMessage] = useState([]);
  const [canWrite, setCanWrite] = useState(true);

  const makeQuestion = async (incomingQuestion) => {
    setCanWrite(() => false);
    setUserMessage(() => [...userMessage, incomingQuestion]);
    return await HTTPClient.iaQuestion("chat", undefined, {
      question: incomingQuestion,
    })
      .then((result) => setIaMessage(() => [...iaMessage, result.data]))
      .then(() => setCanWrite(() => true));
  };

  return (
    <ChatContext.Provider
      value={{
        makeQuestion,
        iaMessage: iaMessage[iaMessage.length - 1],
        userMessage: userMessage[userMessage.length - 1],
        canWrite,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export { ChatProvider, ChatContext };

ChatProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
