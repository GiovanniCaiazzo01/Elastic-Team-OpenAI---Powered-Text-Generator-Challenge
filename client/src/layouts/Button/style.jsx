import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    `
  opacity: 50%;
  pointer-events: none;`}
  // PADDING SECTION
  ${(props) =>
    props.padding && `padding: ${props.theme.sizes.px[props.padding]};`}
  ${(props) =>
    props.paddingTop &&
    !props.padding &&
    `padding-top: ${props.theme.sizes.px[props.paddingTop]};`}
${(props) =>
    props.paddingBottom &&
    !props.padding &&
    `padding-bottom: ${props.theme.sizes.px[props.paddingBottom]};`}
${(props) =>
    props.paddingLeft &&
    !props.padding &&
    `padding-left: ${props.theme.sizes.px[props.paddingLeft]};`}
${(props) =>
    props.paddingRight &&
    !props.padding &&
    `padding-right: ${props.theme.sizes.px[props.paddingRight]};`}

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

    //BORDER SECTION
    border: none;
  ${(props) =>
    props.borderRadius &&
    `border-radius: ${props.theme.sizes.px[props.borderRadius]};`}

  //BACKGROND SECTION
    ${(props) =>
    props.backgroundColor &&
    `background-color: ${props.theme.colors[props.backgroundColor]};`}

    // COLOR SECTION
    ${(props) => props.color && `color: ${props.theme.colors[props.color]};`}
`;
