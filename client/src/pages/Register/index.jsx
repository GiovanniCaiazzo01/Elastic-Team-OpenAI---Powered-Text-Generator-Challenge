import { Logo } from "../../components";
import { Container, Flex, Text } from "../../layouts";
const Register = () => {
  return (
    <Container padding={19}>
      <Flex flexDirection="column">
        <Flex flexDirection="row" justifyContent={4} width={19}>
          <Logo />
          <Flex flexDirection="column">
            <Text color="primary">Elastic Team</Text>
            <Text color="black">Real-time Chat App</Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export { Register };
