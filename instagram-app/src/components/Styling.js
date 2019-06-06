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

export const UserHeader = styled.header`
display: flex;
flex-flow: row nowrap;
max-width: 650px;
margin: 0 auto;
justify-content: flex-start;
font-family: sans-serif;
`;

export const UserImg = styled.img`
height: 6%;
width: 6%;
overflow: hidden;
border-radius: 50%;
`;

export const MainPost = styled.img`
${props => (props.type === "main" ? `border: 2px solid blue` : null)}
`;

export const CommentStyling = styled.div`
display: flex;
flex-flow: column wrap;
max-width: 650px;
margin: 0 auto;
justify-content: flex-start;
font-family: sans-serif;
${props => (props.type === "time" ? `color: gray` : null)}
`;

export const CommentStyling2 = styled.div`
display: flex;
flex-flow: row nowrap;
max-width: 650px;
justify-content: flex-start;
align-items: flex-end
font-family: sans-serif;
${props => (props.type === "time" ? `color: gray` : null)}
`;



