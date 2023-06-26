import { Logo } from "../../components";
import { Container, Flex, Text } from "../../layouts";
const Register = () => {
  return (
    <Container padding={4} width={503} maxWidth={503}>
      <Flex flexDirection="column">
        <Flex
          flexDirection="row"
          fullWidth
          justifyContent={0}
          width={19}
          marginBottom={8}
        >
          <Logo />
          <Flex flexDirection="column" justifyContent={1}>
            <Text color="primary" fontSize={8} fontWeight={5} lineHeight={13}>
              Elastic Team
            </Text>
            <Text fontSize={8} fontWeight={5} color="black" lineHeight={13}>
              Real-time Chat App
            </Text>
          </Flex>
        </Flex>
        <Text
          color="darkGray"
          fontWeight={6}
          fontSize={9}
          lineHeight={13}
          marginBottom={4}
        >
          Sign up
        </Text>
        <Text
          color="darkGray"
          fontWeight={3}
          fontSize={7}
          lineHeight={13}
          marginBottom={4}
        >
          Email Address
        </Text>
      </Flex>
    </Container>
  );
};

export { Register };
