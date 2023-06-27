import { Flex, Text } from "../../layouts";
import { Logo } from "../../components";
import PropTypes from "prop-types";

const LogoWithText = ({ firstLabel, secondLabel }) => {
  return (
    <Flex
      flexDirection="row"
      fullWidth
      justifyContent={0}
      width={19}
      marginBottom={11}
    >
      <Logo />
      <Flex flexDirection="column" justifyContent={1}>
        <Text
          color="primary"
          fontSize={8}
          fontFamily="main"
          fontWeight={5}
          lineHeight={13}
        >
          {firstLabel}
        </Text>
        <Text
          fontSize={8}
          fontFamily="main"
          fontWeight={5}
          color="black"
          lineHeight={13}
        >
          {secondLabel}
        </Text>
      </Flex>
    </Flex>
  );
};

export { LogoWithText };

LogoWithText.propTypes = {
  firstLabel: PropTypes.string.isRequired,
  secondLabel: PropTypes.string.isRequired,
};
