import { Flex } from "../../../../layouts";

import { Avatar } from "../../../../components";

import { ChatText } from "./ChatText";

const ChatMessage = () => {
  return (
    <Flex justifyContent={2}>
      <ChatText />
      <Avatar content="GC" />
    </Flex>
  );
};

export { ChatMessage };
