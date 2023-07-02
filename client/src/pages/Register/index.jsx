import { useState } from "react";
import { LogoWithText } from "../../components";
import { Button, Container, Flex, Input, Text, Link } from "../../layouts";
import HTTPClient from "../../api/HTTPClient";

const Register = () => {
  const [userCredentials, setUserCredentials] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const onUserInput = (e) => {
    return setUserCredentials((prev) => ({ ...prev, [e.name]: e.value }));
  };

  const onSubmit = async () => {
    return await HTTPClient.post("users/register", undefined, userCredentials);
  };
  return (
    <Container padding={4} width={503} maxWidth={503}>
      <Flex flexDirection="column">
        <LogoWithText
          firstLabel="Elastic Team"
          secondLabel="Real-time Chat App"
          marginBottom={11}
        />
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
          color="linearBlack"
          marginBottom={7}
          type="email"
          name="email"
          placeholder="Your Username"
          onChange={(e) => onUserInput(e.target)}
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
          color="linearBlack"
          marginBottom={7}
          type="text"
          name="fullName"
          placeholder="Your Full Name"
          onChange={(e) => onUserInput(e.target)}
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
          color="linearBlack"
          marginBottom={7}
          type="password"
          name="password"
          placeholder="Your Password"
          onChange={(e) => onUserInput(e.target)}
        />
        <Flex fullWidth justifyContent={3} marginTop={19} alignItems={1}>
          <Button
            backgroundColor="brandGreen"
            paddingLeft={15}
            paddingRight={15}
            paddingTop={3}
            paddingBottom={3}
            borderRadius={3}
            disabled={
              userCredentials.fullName &&
              userCredentials.email &&
              userCredentials.password
                ? false
                : true
            }
            onClick={() => onSubmit()}
          >
            <Text
              color="white"
              fontFamily="main"
              fontWeight={6}
              fontSize={7}
              lineHeight={15}
            >
              Sign up
            </Text>
          </Button>
          <Link
            fontWeight={3}
            fontSize={7}
            fontFamily="main"
            color="midGrey"
            lineHeight={11}
            href="/login"
          >
            Log in
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export { Register };
