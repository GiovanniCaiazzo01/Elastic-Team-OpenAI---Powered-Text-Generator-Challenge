import { Input, Text } from "../../layouts";
import PropTypes from "prop-types";

const InputWithText = ({
  inputType,
  inputName,
  inputPlaceholder,
  invalidInput,
  textLabel,
  onChange,
}) => {
  return (
    <>
      <Text
        fontFamily="main"
        color="darkGrey"
        fontWeight={3}
        fontSize={7}
        lineHeight={13}
        marginBottom={7}
      >
        {textLabel}
      </Text>
      <Input
        fullWidth
        border={{ px: 0, color: "lightGrey" }}
        borderRadius={1}
        height={23}
        color="linearBlack"
        marginBottom={7}
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        invalidInput={invalidInput}
        onChange={(e) => onChange(e.target)}
      />
    </>
  );
};

export { InputWithText };

InputWithText.propTypes = {
  inputType: PropTypes.string,
  inputName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  invalidInput: PropTypes.bool,
  textLabel: PropTypes.string,
  onChange: PropTypes.func,
};
