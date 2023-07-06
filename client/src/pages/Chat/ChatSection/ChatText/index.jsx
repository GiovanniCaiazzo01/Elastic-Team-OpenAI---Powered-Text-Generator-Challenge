import { Container, Flex, Text } from "../../../../layouts";
import PropTypes from "prop-types";

const ChatText = ({ textMessage }) => {
  return (
    <Container
      backgroundColor="whiteGrey"
      paddingTop={3}
      paddingBottom={3}
      paddingRight={7}
      paddingLeft={7}
      borderRadius={5}
    >
      <Flex alignItems={1} justifyContent={1} fullHeight>
        <Text
          fontFamily="tertiary"
          fontWeight={3}
          fontSize={6}
          lineHeight={10}
          color="linearBlack"
        >
          {textMessage}
        </Text>
      </Flex>
    </Container>
  );
};

export { ChatText };
ChatText.propTypes = {
  textMessage: PropTypes.string,
};
