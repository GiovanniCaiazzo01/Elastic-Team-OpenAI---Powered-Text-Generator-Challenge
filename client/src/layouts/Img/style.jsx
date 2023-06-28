import styled from "styled-components";

export const StyledImg = styled.img`
  ${(props) => props.width && `width: ${props.theme.sizes.px[props.width]};`}
  ${(props) => props.height && `height: ${props.theme.sizes.px[props.height]};`}


  ${(props) => props.cursorPointer && `cursor: pointer;`}

  // MARGIN SECTION
  ${(props) => props.margin && `margin: ${props.theme.sizes.px[props.margin]};`}
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
