import styled from 'styled-components';
import Link from 'next/link';

const StyledUserSearchResult = styled.li`
	border: 1px solid #666;
	border-radius: 4px;
	color: #333;
	list-style: none;
	text-decoration: none;
	transform: scale(1);
	transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;

	&:hover {
		color: #444;
		transform: scale(1.05);
	}

	a {
		color: inherit;
		display: block;
		padding: 1rem;
		text-decoration: none;
	}

	h2,
	p {
		margin: 0;
	}
`;

interface IUserSearchResultProps {
	name: string;
	username: string;
	id: string;
	type: string;
}

const UserSearchResult = ({ name, username, id, type }: IUserSearchResultProps): JSX.Element => {
	return (
		<StyledUserSearchResult key={id}>
			<Link href={`/${type === 'User' ? 'user' : 'org'}/${username}`}>
				<a>
					<h2>{`${type === 'User' ? '😺' : '🏢'} ${name ? name : '(no name given)'}`}</h2>
					<p>{username}</p>
				</a>
			</Link>
		</StyledUserSearchResult>
	);
};

export default UserSearchResult;
