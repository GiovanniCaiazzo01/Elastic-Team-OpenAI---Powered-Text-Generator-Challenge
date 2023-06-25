import { Logo } from "../../components";
import { Container, Flex } from "../../layouts";
const Register = () => {
  return (
    <Container padding={19} backgroundColor="black">
      <Flex flexDirection="column">
        <Flex flexDirection="row" justifyContent={4} width={19}>
          <Logo />
        </Flex>
      </Flex>
    </Container>
  );
};

export { Register };
