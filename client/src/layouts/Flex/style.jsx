import styled from "styled-components";
import { StyledContainer } from "../Container/style";

export const StyledFlex = styled(StyledContainer)`
  ${(props) => props.fullWidth && `width: 100%;`}
  ${(props) => props.fullHeight && `height: 100%;`}
  
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection === "column" ? "column" : "row"};
  ${(props) =>
    props.flexWrap &&
    `flex-wrap: ${props.theme.flexAlignment[props.flexWrap]};`}
  ${(props) =>
    props.alignContent &&
    `align-content: ${props.theme.flexAlignment[props.alignContent]};`}
  ${(props) =>
    props.justifyContent &&
    `justify-content: ${props.theme.flexAlignment[props.justifyContent]};`}
  ${(props) =>
    props.alignItems &&
    `align-items: ${props.theme.flexAlignment[props.alignItems]};`}
`;
