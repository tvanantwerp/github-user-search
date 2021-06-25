import { useState, useEffect } from 'react';
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
	const [results, setResults] = useState<any>(null);
	const { loading, error, data } = useQuery(USER_SEARCH_QUERY, {
		variables: { username },
	});

	useEffect(() => {
		if (data) setResults(data);
	}, [data]);

	if (error) {
		return (
			<div>
				<h2>Error!</h2>
				<p>{error}</p>
			</div>
		);
	}

	return (
		<div>
			<input type="search" onChange={(e) => setUsername(e.target.value)} />
			<p>{loading ? 'Searching...' : `Found ${data.search.userCount} results.`}</p>
			{results && (
				<>
					<UserSearchResultList nodes={results.search.edges} />
				</>
			)}
		</div>
	);
};

export default UserSearch;
