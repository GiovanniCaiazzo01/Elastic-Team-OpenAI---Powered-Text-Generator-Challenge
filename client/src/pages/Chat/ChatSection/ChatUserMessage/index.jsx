import { Flex } from "../../../../layouts";

import { Avatar } from "../../../../components";

import { ChatText } from "../ChatText";

// import PropTypes from "prop-types";

const ChatUserMessage = () => {
  return (
    <Flex justifyContent={2}>
      <ChatText />
      <Avatar content="GC" marginLeft={7} />
    </Flex>
  );
};

export { ChatUserMessage };

ChatUserMessage.propTypes = {
  // origin: PropTypes.string,
};
