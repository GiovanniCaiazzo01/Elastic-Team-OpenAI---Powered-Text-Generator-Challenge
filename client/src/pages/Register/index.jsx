import { Logo } from "../../components";
import { Container, Flex, Input, Text } from "../../layouts";
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
            <Text
              color="primary"
              fontSize={8}
              fontFamily="main"
              fontWeight={5}
              lineHeight={13}
            >
              Elastic Team
            </Text>
            <Text
              fontSize={8}
              fontFamily="main"
              fontWeight={5}
              color="black"
              lineHeight={13}
            >
              Real-time Chat App
            </Text>
          </Flex>
        </Flex>
        <Text
          color="darkGrey"
          fontWeight={6}
          fontFamily="secondary"
          fontSize={9}
          lineHeight={13}
          marginBottom={7}
        >
          Sign up
        </Text>
        <Text
          fontFamily="main"
          color="darkGrey"
          fontWeight={3}
          fontSize={7}
          lineHeight={13}
          marginBottom={4}
        >
          Email Address
        </Text>
        <Input
          fullWidth
          border={{ px: 0, color: "lightGrey" }}
          borderRadius={1}
          height={23}
          color="lightGrey"
          marginBottom={4}
        />
        <Text
          fontFamily="main"
          color="darkGrey"
          fontWeight={3}
          fontSize={7}
          lineHeight={13}
          marginBottom={4}
        >
          Full Name
        </Text>
        <Input
          fullWidth
          border={{ px: 0, color: "lightGrey" }}
          borderRadius={1}
          height={23}
          color="lightGrey"
          marginBottom={4}
        />
        <Text
          fontFamily="main"
          color="darkGrey"
          fontWeight={3}
          fontSize={7}
          lineHeight={13}
          marginBottom={4}
        >
          Password
        </Text>
        <Input
          fullWidth
          border={{ px: 0, color: "lightGrey" }}
          borderRadius={1}
          height={23}
          color="lightGrey"
          marginBottom={4}
        />
        <Flex fullWidth justifyContent={3}>
          <button>dda</button>
          <a>link</a>
        </Flex>
      </Flex>
    </Container>
  );
};

export { Register };
