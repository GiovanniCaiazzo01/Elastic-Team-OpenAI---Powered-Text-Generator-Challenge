import { LogoWithText } from "../../../components";
import { Container } from "../../../layouts";
const ChatHeader = () => {
  return (
    <Container
      paddingBottom={7}
      paddingTop={5}
      paddingLeft={8}
      paddingRight={8}
      backgroundColor="white"
      borderBottom={{ px: 0, color: "softGrey" }}
    >
      <LogoWithText
        firstLabel="Elastic Team"
        secondLabel="Open AI - Text Generator"
      />
    </Container>
  );
};

export { ChatHeader };
