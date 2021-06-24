import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const USER_SEARCH_QUERY = gql`
	query UserSearch($username: String!) {
		search(query: $username, type: USER, first: 10) {
			userCount
			edges {
				cursor
				node {
					... on User {
						id
						login
					}
				}
			}
		}
	}
`;

const UserSearch = (): JSX.Element => {
	const [username, setUsername] = useState('');
	const { loading, error, data, refetch } = useQuery(USER_SEARCH_QUERY, {
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

	console.log(data);

	return (
		<div>
			<input type="text" onChange={(e) => setUsername(e.target.value)} />
			<p>{username}</p>
			{loading ? (
				<p>Loading...</p>
			) : (
				<ol>
					{data.search.edges.map(({ node }: any) => (
						<li key={node.id}>{node.login}</li>
					))}
				</ol>
			)}
		</div>
	);
};

export default UserSearch;
