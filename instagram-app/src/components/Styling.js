import styled, { css } from 'styled-components';

export const Search = styled.span`
display: flex;
flex-flow: row nowrap;
max-width: 650px;
width: 100%;
justify-content: space-between
margin: 0 auto;
margin-bottom: 30px;
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
${props => (props.type === "time" ? `align-items: flex-start` : null)}
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

export const CommentStyling3 = styled.strong`
margin-right: 20px;
${props => (props.type === "time" ? `color: gray` : null)}
`;

export const CommentBoxStyling = styled.form`
display: flex;
flex-flow: row nowrap;
max-width: 650px;
width: 100%
margin: 0 auto;
margin-bottom: 50px;
justify-content: flex-start;
font-family: sans-serif;
`;
// I don't like styled components - no auto-suggest to avoid typos
// And it doesn't work on input boxes, gotta use CSS anyway


