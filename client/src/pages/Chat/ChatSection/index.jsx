import { useEffect, useState } from "react";
import { Container, Flex } from "../../../layouts";
import { ChatIAMessage } from "./ChatIAMessage";
import { ChatUserMessage } from "./ChatUserMessage";
import PropTypes from "prop-types";
import { useChat } from "../../../hooks";

const ChatSection = () => {
  const [messageQueue, setMessageQueue] = useState([]);

  const { userMessage, iaMessage } = useChat();

  useEffect(() => {
    if (userMessage) {
      setMessageQueue((prevMessageQueue) => [
        ...prevMessageQueue,
        { origin: "user", message: userMessage },
      ]);
    }
  }, [userMessage]);

  useEffect(() => {
    if (iaMessage) {
      setMessageQueue((prevMessageQueue) => [
        ...prevMessageQueue,
        { origin: "ia", message: iaMessage },
      ]);
    }
  }, [iaMessage]);

  return (
    <Container paddingLeft={11} paddingRight={14} marginTop={20}>
      <Flex flexDirection="column" fullHeight>
        {messageQueue &&
          messageQueue.map((m, i) => {
            const isUserMessage = m.origin === "user";
            return isUserMessage ? (
              <ChatUserMessage key={i + "a"} userMessage={m.message} />
            ) : (
              <ChatIAMessage key={i + "b"} iaMessage={m.message} />
            );
          })}
      </Flex>
    </Container>
  );
};

export { ChatSection };
ChatSection.propTypes = {
  userMessage: PropTypes.string,
  iaMessage: PropTypes.string,
};
