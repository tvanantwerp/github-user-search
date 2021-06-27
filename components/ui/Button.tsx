import styled, { css } from 'styled-components';

const sharedStyles = css`
	background-color: rgb(255, 255, 255);
	border: 3px solid #333;
	border-radius: 20px;
	color: #333;
	font-weight: 400;
	padding: 0.5rem 1rem;
	transition: font-weight 0.2s ease-in-out, background-color 0.2s ease-in-out;

	&:disabled,
	&:disabled:hover {
		background-color: #ccc;
		border-color: #666;
		cursor: not-allowed;
		font-weight: 400;
		text-decoration: line-through;
	}

	&:hover {
		background-color: rgb(139, 185, 151);
		color: inherit;
		font-weight: 700;
	}
`;

const Button = styled.button`
	cursor: pointer;
	${sharedStyles}
`;

const ButtonLink = styled.a`
	text-align: center;
	${sharedStyles}
`;

export { Button as default, ButtonLink };
