import { Container, Flex } from "../../../../layouts";

import { Avatar } from "../../../../components";

import { ChatText } from "../ChatText";

// import PropTypes from "prop-types";

const ChatUserMessage = () => {
  return (
    <Container marginBottom={17}>
      <Flex justifyContent={2}>
        <ChatText />
        <Avatar content="GC" marginLeft={7} />
      </Flex>
    </Container>
  );
};

export { ChatUserMessage };

ChatUserMessage.propTypes = {
  // origin: PropTypes.string,
};
