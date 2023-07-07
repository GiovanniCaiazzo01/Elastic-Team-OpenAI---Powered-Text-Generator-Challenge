import { Container, Flex, Text } from "../../layouts";
import PropTypes from "prop-types";
const Avatar = ({ content, marginRight, marginLeft }) => {
  const dynamicProp = { marginLeft: marginLeft, marginRight: marginRight };
  dynamicProp[marginLeft && !marginRight ? marginLeft : marginRight];
  return (
    <Container
      width={40}
      maxWidth={40}
      height={40}
      padding={3}
      {...dynamicProp}
      borderRadius={4}
      backgroundColor="primary"
    >
      <Flex justifyContent={1} alignItems={1} fullHeight>
        <Text
          fontSize={7}
          fontWeight={6}
          fontFamily="tertiary"
          color="white"
          lineHeight={11}
        >
          {content}
        </Text>
      </Flex>
    </Container>
  );
};

export { Avatar };

Avatar.propTypes = {
  content: PropTypes.string.isRequired,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
};
