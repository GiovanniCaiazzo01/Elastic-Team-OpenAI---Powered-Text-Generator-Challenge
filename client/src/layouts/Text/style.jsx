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
    ${(props) =>
    props.lineHeight &&
    `line-height: ${props.theme.sizes.px[props.lineHeight]};`}
    
    // MARGIN SECTION
    ${(props) =>
    props.margin && `margin: ${props.theme.sizes.px[props.margin]};`}
    ${(props) =>
    props.marginTop &&
    !props.margin &&
    `margin-top: ${props.theme.sizes.px[props.marginTop]};`}
    ${(props) =>
    props.marginBottom &&
    !props.margin &&
    `margin-bottom: ${props.theme.sizes.px[props.marginBottom]};`}
    ${(props) =>
    props.marginLeft &&
    !props.margin &&
    `margin-left: ${props.theme.sizes.px[props.marginLeft]};`}
    ${(props) =>
    props.marginRight &&
    !props.margin &&
    `margin-right: ${props.theme.sizes.px[props.marginRight]};`}
`;
