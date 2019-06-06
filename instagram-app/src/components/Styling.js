import styled, { css } from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  &:hover {
    padding: 0.5em 1.25em;
    font-size: 24px;
  }

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

export const Search = styled.span`
display: flex;
flex-flow: row nowrap;
justify-content: space-around;
font-family: sans-serif;
${props => (props.type === "success" ? `background: red` : null)}
`;

// export const SearchInsta = styled.h5`
// display: flex;
// flex-flow: row nowrap;
// justify-content: flex-end;
// font-size: 25px;
// margin-right: 20px;
// ${props => (props.type === "success" ? `background: blue` : null)}
// `;
