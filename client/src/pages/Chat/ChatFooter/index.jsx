import { Container, Flex, Input } from "../../../layouts";
import svgIconSax from "../../../assets/img/iconSax.svg";
import PropTypes from "prop-types";
import { useChat } from "../../../hooks";
import { useEffect } from "react";

const ChatFooter = ({ onChange, onSubmit }) => {
  const { canWrite } = useChat();

  useEffect(() => {
    console.log(canWrite);
  }, [canWrite]);

  return (
    <Container
      marginLeft={11}
      marginRight={7}
      marginBottom={11}
      borderRadius={4}
      border={{ px: 0, color: "softGrey" }}
    >
      <form onSubmit={(e) => onSubmit(e)}>
        <Flex fullWidth alignItems={1} justifyContent={1}>
          {canWrite ? (
            <Input
              fullWidth
              height={24}
              type="text"
              name="chatInput"
              placeholder="Type yout prompt here..."
              extra={svgIconSax}
              onChange={(e) => onChange(e.target)}
            />
          ) : (
            <Input
              fullWidth
              height={24}
              type="text"
              name="chatInput"
              placeholder="Type yout prompt here..."
              extra={svgIconSax}
              onChange={(e) => onChange(e.target)}
              disabled={true}
            />
          )}
        </Flex>
      </form>
    </Container>
  );
};

export { ChatFooter };
ChatFooter.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
