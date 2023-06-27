import { LogoWithText } from "../../components";
import { Container } from "../../layouts";

const Chat = () => {
  return (
    <Container
      height={80}
      paddingBottom={7}
      paddingTop={5}
      paddingLeft={8}
      paddingRight={8}
    >
      <LogoWithText
        firstLabel="Elastic Team"
        secondLabel="Open AI - Text Generator"
        marginBottom={20}
      />
    </Container>
  );
};

export { Chat };
