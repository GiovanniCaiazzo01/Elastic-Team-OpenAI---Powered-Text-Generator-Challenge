import { useState } from "react";
import { InputWithText, LogoWithText } from "../../components";
import { Button, Container, Flex, Text, Link } from "../../layouts";

import HTTPClient from "../../api/HTTPClient";
import { useAuth } from "../../hooks";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [invalidInput, setInvalidInput] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { setAuthToken } = useAuth();

  const onUserInput = (e) => {
    invalidInput && setInvalidInput(() => false);
    return setUserCredentials((prev) => ({ ...prev, [e.name]: e.value }));
  };

  const onSubmit = async () => {
    const userLogin = await HTTPClient.post(
      "auth/login",
      undefined,
      userCredentials
    );

    !userLogin.result && setInvalidInput(() => true);
    await setAuthToken(userLogin.data.jwt_token);
    return navigate("/chat");
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
          Please log in to continue
        </Text>
        <InputWithText
          inputType="email"
          inputName="email"
          inputPlaceholder="Your Email Address"
          textLabel="Email Address"
          invalidInput={invalidInput}
          onChange={(e) => onUserInput(e)}
        />

        <InputWithText
          inputType="password"
          inputName="password"
          inputPlaceholder="Your Password"
          textLabel="Password"
          invalidInput={invalidInput}
          onChange={(e) => onUserInput(e)}
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
              userCredentials.email && userCredentials.password ? false : true
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
              Log in
            </Text>
          </Button>
          <Link
            fontWeight={3}
            fontSize={7}
            fontFamily="main"
            color="midGrey"
            lineHeight={11}
            href="/register"
          >
            Sign up
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export { Login };
