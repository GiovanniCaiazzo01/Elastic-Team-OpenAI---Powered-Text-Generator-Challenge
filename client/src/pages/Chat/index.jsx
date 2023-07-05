import { useState } from "react";
import { Container, Flex } from "../../layouts";
import { ChatFooter } from "./ChatFooter";
import { ChatHeader } from "./ChatHeader";
import { ChatSection } from "./ChatSection";
import HTTPClient from "../../api/HTTPClient";

const Chat = () => {
  const [userInput, setUserInput] = useState({ chatInput: "" });
  // const [questions, setQuestions] = useState([]);
  // const [IaAnswer, setIaAnswer] = useState([]);

  const onUserInput = (input) => {
    setUserInput((prev) => ({ ...prev, [input.name]: input.value }));
  };

  const onUserSubmit = async (e) => {
    e.preventDefault();
    // setQuestions(() => [...questions, userInput.chatInput]);

    // await HTTPClient.post("chat/", undefined, userInput).then((result) =>
    //   setIaAnswer((prev) => [
    //     ...prev,
    //     { message: result.data, userCanWrite: false },
    //   ])
    // );
  };

  return (
    <>
      <Flex fullHeight flexDirection="column" justifyContent={3}>
        <Container>
          <ChatHeader />
          <ChatSection />
        </Container>
        <ChatFooter onChange={onUserInput} onSubmit={(e) => onUserSubmit(e)} />
      </Flex>
    </>
  );
};

export { Chat };
