import { Container, Flex } from "../../../layouts";
import { ChatMessage } from "./ChatMessage";

const ChatSection = () => {
  return (
    <Container>
      <Flex flexDirection="column" fullHeight>
        <ChatMessage />;
      </Flex>
    </Container>
  );
};

export { ChatSection };
