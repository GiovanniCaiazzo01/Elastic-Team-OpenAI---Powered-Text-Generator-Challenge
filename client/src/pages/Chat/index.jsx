import { useState } from "react";
import { Container, Flex } from "../../layouts";
import { ChatFooter } from "./ChatFooter";
import { ChatHeader } from "./ChatHeader";
import { ChatSection } from "./ChatSection";
import { useChat } from "../../hooks";

const Chat = () => {
  const [userInput, setUserInput] = useState({ chatInput: "" });

  const { makeQuestion, userMessage, iaMessage } = useChat();

  const onUserInput = (input) => {
    setUserInput((prev) => ({ ...prev, [input.name]: input.value }));
  };

  const onUserSubmit = async (e) => {
    e.preventDefault();
    await makeQuestion(userInput.chatInput);
  };

  return (
    <>
      <Flex fullHeight flexDirection="column" justifyContent={3}>
        <Container>
          <ChatHeader />
          <ChatSection userMessage={userMessage} iaMessage={iaMessage} />
        </Container>
        <ChatFooter onChange={onUserInput} onSubmit={(e) => onUserSubmit(e)} />
      </Flex>
    </>
  );
};

export { Chat };
