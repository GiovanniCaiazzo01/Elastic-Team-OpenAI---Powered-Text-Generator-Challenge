import { Container, Flex, Input } from "../../../layouts";
import svgIconSax from "../../../assets/img/iconSax.svg";
const ChatFooter = () => {
  return (
    <Container
      marginLeft={11}
      marginRight={7}
      borderRadius={4}
      border={{ px: 0, color: "softGrey" }}
    >
      <Flex fullWidth alignItems={1} justifyContent={1}>
        <Input
          fullWidth
          height={24}
          type="text"
          placeholder="Type yout prompt here..."
          extra={svgIconSax}
        />
      </Flex>
    </Container>
  );
};

export { ChatFooter };
