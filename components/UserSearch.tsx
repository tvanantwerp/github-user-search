import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';

const USER_SEARCH_QUERY = gql`
	query UserSearch($username: String!) {
		search(query: $username, type: USER, first: 10) {
			userCount
			edges {
				cursor
				node {
					... on User {
						login
						name
						id
						__typename
					}
					... on Organization {
						login
						name
						id
						__typename
					}
				}
			}
		}
	}
`;

const UserSearch = (): JSX.Element => {
	const [username, setUsername] = useState('');
	const { loading, error, data } = useQuery(USER_SEARCH_QUERY, {
		variables: { username },
	});

	if (error) {
		return (
			<div>
				<p>Error!</p>
				<p>{error}</p>
			</div>
		);
	}

	return (
		<div>
			<input type="search" onChange={(e) => setUsername(e.target.value)} />
			<p>{username}</p>
			{loading ? (
				<p>Loading...</p>
			) : (
				<>
					<p>{`${data.search.userCount} Results`}</p>
					<ol>
						{data.search.edges.map(({ node }: any) => (
							<li key={node.id}>
								<Link href={`/${node.__typename === 'User' ? 'user' : 'org'}/${node.login}`}>
									<a>
										<h2>{`${node.__typename === 'User' ? '😺' : '🏢'} ${node.name}`}</h2>
										<p>{node.login}</p>
									</a>
								</Link>
							</li>
						))}
					</ol>
				</>
			)}
		</div>
	);
};

export default UserSearch;
