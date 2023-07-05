import { Container, Flex } from "../../../../layouts";

import { Avatar } from "../../../../components";
import { ChatText } from "../ChatText";

import PropTypes from "prop-types";

const ChatIAMessage = ({ iaMessage }) => {
  return (
    <Container marginBottom={17}>
      <Flex justifyContent={0}>
        <Avatar content="IA" marginRight={7} />
        <ChatText textMessage={iaMessage} />
      </Flex>
    </Container>
  );
};

export { ChatIAMessage };

ChatIAMessage.propTypes = {
  iaMessage: PropTypes.string,
};
