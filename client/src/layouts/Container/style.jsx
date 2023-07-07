import styled from "styled-components";

export const StyledContainer = styled.div`
  ${(props) => props.width && `width: ${props.width}px;`}
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth}px;`}
  ${(props) => props.height && `height: ${props.height}px;`}
  ${(props) =>
    props.fullWidth && !props.width && !props.maxWidth && "width:100%;"}
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
        
    ${(props) => props.position && `position: ${props.position};`}
    ${(props) => props.top && `top: ${props.top};`}
    ${(props) => props.bottom && `bottom: ${props.bottom};`}
    ${(props) => props.left && `left: ${props.left};`}
    ${(props) => props.right && `right: ${props.right};`}
    

            //BORDER SECTION
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
`;
