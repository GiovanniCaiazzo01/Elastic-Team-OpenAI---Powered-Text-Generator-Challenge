import { Container, Flex } from "../../../layouts";
import { ChatIAMessage } from "./ChatIAMessage";
import { ChatUserMessage } from "./ChatUserMessage";

const ChatSection = () => {
  return (
    <Container paddingLeft={11} paddingRight={14} marginTop={20}>
      <Flex flexDirection="column" fullHeight>
        <ChatUserMessage />
        <ChatIAMessage />
      </Flex>
    </Container>
  );
};

export { ChatSection };
