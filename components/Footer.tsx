import styled from 'styled-components';

const StyledFooter = styled.footer`
	border-top: 3px dotted #333;
	display: grid;
	grid-gap: 1rem;
	grid-template: auto / 1fr auto;
	margin-top: 1rem;
	padding-top: 1rem;

	a {
		color: #333;
		text-decoration: none;

		&:active,
		&:hover,
		&:visited {
			color: #333;
		}

		h1 {
			display: inline-block;
			font-size: 1.6rem;
			font-weight: 400;
		}
	}
`;

const Header = () => {
	return (
		<StyledFooter>
			<div>
				Built by{' '}
				<a href="https://tomvanantwerp.com/" target="_blank" rel="noopener noreferrer">
					Tom VanAntwerp
				</a>
				.
			</div>
			<div>
				See it on{' '}
				<a
					href="https://github.com/tvanantwerp/github-user-search/"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>
			</div>
		</StyledFooter>
	);
};

export default Header;
