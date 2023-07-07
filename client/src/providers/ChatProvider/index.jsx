import { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";
import HTTPClient from "../../api/HTTPClient.js";
import { useAuth } from "../../hooks/index.js";
import { useNavigate } from "react-router-dom";
const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [userMessage, setUserMessage] = useState([]);
  const [iaMessage, setIaMessage] = useState([]);
  const [canWrite, setCanWrite] = useState(true);

  const navigate = useNavigate();
  const { verifyToken, token } = useAuth();

  const makeQuestion = async (incomingQuestion) => {
    await verifyToken(token);
    if (!token) {
      return;
    }
    setCanWrite(() => false);
    setUserMessage(() => [...userMessage, incomingQuestion]);
    return await HTTPClient.iaQuestion("chat", undefined, {
      question: incomingQuestion,
    })
      .then((result) => setIaMessage(() => [...iaMessage, result.data]))
      .then(() => setCanWrite(() => true));
  };

  useEffect(() => {
    !token && navigate("/login", { replace: true });
  }, []);

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
