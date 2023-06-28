import { Container, Flex } from "../../../../layouts";

import { Avatar } from "../../../../components";
import { ChatText } from "../ChatText";

// import PropTypes from "prop-types";

const ChatIAMessage = () => {
  return (
    <Container marginBottom={17}>
      <Flex justifyContent={0}>
        <Avatar content="IA" marginRight={7} />
        <ChatText />
      </Flex>
    </Container>
  );
};

export { ChatIAMessage };

ChatIAMessage.propTypes = {
  // origin: PropTypes.string,
};
