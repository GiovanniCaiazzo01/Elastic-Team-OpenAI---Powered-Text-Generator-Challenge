import { useState } from "react";
import { Container, Flex } from "../../../layouts";
import { ChatIAMessage } from "./ChatIAMessage";
import { ChatUserMessage } from "./ChatUserMessage";
import PropTypes from "prop-types";
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
ChatSection.propTypes = {
  onChange: PropTypes.func,
};
