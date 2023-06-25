import styled from "styled-components";

export const StyledText = styled.div`
  ${(props) =>
    props.fontSize && `font-size: ${props.theme.sizes.rem[props.fontSize]};`}

  ${(props) =>
    props.fontWeight &&
    `font-weight: ${props.theme.fontWeight[props.fontWeight]};`}

    ${(props) =>
    props.fontFamily && `font-family: ${props.theme.fonts[props.fontFamily]};`}

    ${(props) =>
    props.textAlign &&
    `text-align: ${props.theme.generalAlignment[props.textAlign]};`}

    ${(props) => props.color && `color: ${props.theme.colors[props.color]};`}
`;
