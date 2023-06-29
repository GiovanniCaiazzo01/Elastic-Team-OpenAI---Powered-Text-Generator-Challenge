import { Container, Flex } from "../../layouts";
import { ChatFooter } from "./ChatFooter";
import { ChatHeader } from "./ChatHeader";
import { ChatSection } from "./ChatSection";

const Chat = () => {
  return (
    <>
      <Flex fullHeight flexDirection="column" justifyContent={3}>
        <Container>
          <ChatHeader />
          <ChatSection />
        </Container>
        <ChatFooter />
      </Flex>
    </>
  );
};

export { Chat };
