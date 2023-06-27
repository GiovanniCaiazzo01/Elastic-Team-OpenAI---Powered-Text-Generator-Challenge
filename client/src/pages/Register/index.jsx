import { Logo } from "../../components";
import { Button, Container, Flex, Input, Text } from "../../layouts";
const Register = () => {
  return (
    <Container padding={4} width={503} maxWidth={503}>
      <Flex flexDirection="column">
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
          marginBottom={11}
        >
          Sign up
        </Text>
        <Text
          fontFamily="main"
          color="darkGrey"
          fontWeight={3}
          fontSize={7}
          lineHeight={13}
          marginBottom={7}
        >
          Email Address
        </Text>
        <Input
          fullWidth
          border={{ px: 0, color: "lightGrey" }}
          borderRadius={1}
          height={23}
          color="lightGrey"
          marginBottom={7}
        />
        <Text
          fontFamily="main"
          color="darkGrey"
          fontWeight={3}
          fontSize={7}
          lineHeight={13}
          marginBottom={7}
        >
          Full Name
        </Text>
        <Input
          fullWidth
          border={{ px: 0, color: "lightGrey" }}
          borderRadius={1}
          height={23}
          color="lightGrey"
          marginBottom={7}
        />
        <Text
          fontFamily="main"
          color="darkGrey"
          fontWeight={3}
          fontSize={7}
          lineHeight={13}
          marginBottom={7}
        >
          Password
        </Text>
        <Input
          fullWidth
          border={{ px: 0, color: "lightGrey" }}
          borderRadius={1}
          height={23}
          color="lightGrey"
          marginBottom={7}
        />
        <Flex fullWidth justifyContent={3} marginTop={19}>
          <Button
            backgroundColor="brandGreen"
            paddingLeft={15}
            paddingRight={15}
            paddingTop={3}
            paddingBottom={3}
            borderRadius={3}
          >
            <Text
              color="white"
              fontFamily="main"
              fontWeight={6}
              lineHeight={15}
            >
              Sign up
            </Text>
          </Button>
          <a>link</a>
        </Flex>
      </Flex>
    </Container>
  );
};

export { Register };
