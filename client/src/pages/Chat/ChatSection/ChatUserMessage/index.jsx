import { Container, Flex } from "../../../../layouts";

import { Avatar } from "../../../../components";

import { ChatText } from "../ChatText";

import PropTypes from "prop-types";

const ChatUserMessage = ({ userMessage }) => {
  return (
    <Container marginBottom={17}>
      <Flex justifyContent={2}>
        <ChatText textMessage={userMessage} />
        <Avatar content="ET" marginLeft={7} />
      </Flex>
    </Container>
  );
};

export { ChatUserMessage };

ChatUserMessage.propTypes = {
  userMessage: PropTypes.string,
};
