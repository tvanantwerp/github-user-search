import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
	border-bottom: 3px dotted #333;
	margin-bottom: 2rem;

	a {
		color: #333;
		text-decoration: none;
		transition: color 0.15s ease-in-out;

		&:active,
		&:hover {
			color: #777;
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
		<StyledHeader>
			<Link href="/">
				<a>
					<h1>GitHub User Search</h1>
				</a>
			</Link>
		</StyledHeader>
	);
};

export default Header;
