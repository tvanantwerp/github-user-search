import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const StyledUserSearchResult = styled.li<{ type: string }>`
	background-color: rgb(255, 255, 255);
	border: 3px solid #666;
	border-radius: 20px;
	color: #333;
	list-style: none;
	text-decoration: none;
	transform: scale(1);
	transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, transform 0.2s ease-in-out;

	&:hover {
		background-color: rgb(120, 201, 241);
		color: #444;
		transform: scale(1.05);
	}

	a {
		color: inherit;
		display: grid;
		justify-items: center;
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
		position: relative;

		img {
			border: 5px solid rgb(237, 188, 88) !important;
			border-radius: 50%;
		}

		&::after {
			bottom: 0;
			right: 0;
			position: absolute;
			content: '${({ type }) => (type === 'User' ? '🧑' : '🏢')}';
			font-size: 2rem;
		}
	}

	.username {
		font-family: monospace;
	}

	.no-name {
		color: #666;
		font-style: italic;
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
							width={100}
							height={100}
						/>
					</div>
					<h2 className={name ? '' : 'no-name'}>{name ? name : 'No name?!?!'}</h2>
					<p className="username">{username}</p>
					<p>{`Member since ${new Date(createdAt).getFullYear()}`}</p>
				</a>
			</Link>
		</StyledUserSearchResult>
	);
};

export default UserSearchResult;
