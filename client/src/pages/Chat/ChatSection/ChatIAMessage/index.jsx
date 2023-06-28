import { Flex } from "../../../../layouts";

import { Avatar } from "../../../../components";
import { ChatText } from "../ChatText";

// import PropTypes from "prop-types";

const ChatIAMessage = () => {
  return (
    <Flex justifyContent={0}>
      <Avatar content="IA" marginRight={7} />
      <ChatText />
    </Flex>
  );
};

export { ChatIAMessage };

ChatIAMessage.propTypes = {
  // origin: PropTypes.string,
};
