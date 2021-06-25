import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import UserSearchResultList from 'components/UserSearchResultList';

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
					<UserSearchResultList nodes={data.search.edges} />
				</>
			)}
		</div>
	);
};

export default UserSearch;
