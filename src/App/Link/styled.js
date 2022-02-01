import styled, { css } from "styled-components";

export const StyledLink = styled.a.attrs(props => ({
  hovered: props.status === 'hovered',
  normal: props.status === 'normal'
}))`
  color: inherit;

  ${props => props.hovered && css`
    color: crimson;
    border-bottom: 1px solid currentColor;
    padding-bottom: 4px;
  `}
`