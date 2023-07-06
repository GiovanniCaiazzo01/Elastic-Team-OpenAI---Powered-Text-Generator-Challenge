import styled from "styled-components";

export const StyledInput = styled.input`
  ${(props) => props.fullWidth && `width: 100%;`}
  ${(props) => props.width && !props.fullWidth && `width: ${props.width}px;`}
  ${(props) =>
    props.maxWidth && !props.fullWidth && `max-width: ${props.maxWidth}px;`}

    ${(props) =>
    props.height && `height: ${props.theme.sizes.px[props.height]};`}
    ${(props) =>
    props.maxHeight && `max-height: ${props.theme.sizes.px[props.maxHeight]};`}
    
  // PADDING SECTION
  padding-left: 24px;
  padding-right: 16px;
  padding-top: 15px;
  padding-bottom: 14px;

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


    ${(props) => props.color && `color: ${props.theme.colors[props.color]};`}

    //BORDER SECTION
    border: none;
  ${(props) =>
    props.borderRadius &&
    `border-radius: ${props.theme.sizes.px[props.borderRadius]};`}

  ${(props) =>
    props.border &&
    `border: solid ${props.theme.sizes.px[props.border.px]} ${
      props.theme.colors[props.border.color]
    };`}

    ${(props) =>
    props.borderTop &&
    `border-top: solid ${props.theme.sizes.px[props.borderTop.px]} ${
      props.theme.colors[props.borderTop.color]
    };`}

      ${(props) =>
    props.borderBottom &&
    `border-bottom: solid ${props.theme.sizes.px[props.borderBottom.px]} ${
      props.theme.colors[props.borderBottom.color]
    };`}

    ${(props) =>
    props.borderLeft &&
    `border-left: solid ${props.theme.sizes.px[props.borderLeft.px]} ${
      props.theme.colors[props.borderLeft.color]
    };`}

    ${(props) =>
    props.borderRight &&
    `border-right: solid ${props.theme.sizes.px[props.borderRight.px]} ${
      props.theme.colors[props.borderRight.color]
    };`}
    
    //BACKGROND SECTION
    ${(props) =>
    props.backgroundColor &&
    `background-color: ${props.theme.colors[props.backgroundColor]};`}

    box-sizing: border-box;

  ${(props) =>
    props.invalidInput &&
    `
    color: red;
    border-color: red;`}

  ${(props) =>
    props.disabled &&
    `
    opacity: 50%;
    pointer-events: none;`}

  &::placeholder {
    color: ${(props) => props.theme.colors.grey};
    font-family: ${(props) => props.theme.fonts.tertiary};
    font-size: ${(props) => props.theme.sizes.rem[6]};
    line-height: ${(props) => props.theme.sizes.rem[16]};
  }
  &:focus {
    outline: none;
  }
`;
