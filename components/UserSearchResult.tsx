import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

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
		display: grid;
		grid-gap: 10px;
		grid-template: auto / 50px 1fr;
		padding: 1rem;
		text-decoration: none;
	}

	h2,
	p {
		margin: 0;
	}

	img {
		border-radius: 50%;
	}
`;

interface IUserSearchResultProps {
	avatar: string;
	createdAt: string;
	name: string;
	username: string;
	id: string;
	type: string;
}

const UserSearchResult = ({
	avatar,
	createdAt,
	name,
	username,
	id,
	type,
}: IUserSearchResultProps): JSX.Element => {
	return (
		<StyledUserSearchResult key={id}>
			<Link href={`/${type === 'User' ? 'user' : 'org'}/${username}`}>
				<a>
					<img src={avatar} alt={`User avatar for ${username}.`} width={50} height={50} />
					<div>
						<h2>{`${type === 'User' ? '😺' : '🏢'} ${name ? name : '(no name given)'}`}</h2>
						<p>{username}</p>
						<p>{`Member since ${new Date(createdAt).getFullYear()}`}</p>
					</div>
				</a>
			</Link>
		</StyledUserSearchResult>
	);
};

export default UserSearchResult;
