import { Container, Flex, Input } from "../../../layouts";

const ChatFooter = () => {
  return (
    <Container marginLeft={11} marginRight={7}>
      <Flex fullWidth alignItems={1} justifyContent={1}>
        <Input
          fullWidth
          height={24}
          type="text"
          borderRadius={4}
          border={{ px: 0, color: "softGrey" }}
          placeholder="Type yout prompt here..."
        />
      </Flex>
    </Container>
  );
};

export { ChatFooter };
