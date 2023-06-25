import { Logo } from "../../components";
import { Container, Flex, Text } from "../../layouts";
const Register = () => {
  return (
    <Container padding={19} backgroundColor="black">
      <Flex flexDirection="column">
        <Flex flexDirection="row" justifyContent={4} width={19}>
          <Logo />
          <Text color="primary">ciao</Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export { Register };
