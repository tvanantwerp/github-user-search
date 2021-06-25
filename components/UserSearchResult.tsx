import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const StyledUserSearchResult = styled.li<{ type: string }>`
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

	h2 {
		font-size: 1.2rem;
	}

	.avatar {
		align-self: center;
		position: relative;

		img {
			border-radius: 50%;
		}

		&::after {
			bottom: 0;
			right: 0;
			position: absolute;
			content: '${({ type }) => (type === 'User' ? '🧑' : '🏢')}';
		}
	}

	.username {
		font-family: monospace;
	}
`;

interface IUserSearchResultProps {
	avatar: any;
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
		<StyledUserSearchResult key={id} type={type}>
			<Link href={`/${type === 'User' ? 'user' : 'org'}/${username}`}>
				<a>
					<div className="avatar">
						<Image
							src={avatar}
							alt={`User avatar for ${username}.`}
							layout="fixed"
							width={50}
							height={50}
						/>
					</div>
					<div>
						<h2>{`${name ? name : '(no name given)'}`}</h2>
						<p className="username">{username}</p>
						<p>{`Member since ${new Date(createdAt).getFullYear()}`}</p>
					</div>
				</a>
			</Link>
		</StyledUserSearchResult>
	);
};

export default UserSearchResult;
