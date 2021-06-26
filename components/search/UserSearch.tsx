import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';

import UserSearchResultList from 'components/search/UserSearchResultList';
import USER_SEARCH_QUERY from 'queries/UserSearchQuery';

const UserSearch = ({ initialData }: any): JSX.Element => {
	const [username, setUsername] = useState('');
	const [results, setResults] = useState<any>(initialData);
	const [getData, { loading, error, data }] = useLazyQuery(USER_SEARCH_QUERY);

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
	console.log(results.search.pageInfo);
	return (
		<div>
			<input
				type="search"
				onChange={(e) => {
					setUsername(e.target.value);
					getData({ variables: { username: e.target.value, first: 12 } });
				}}
			/>
			<p>{loading ? 'Searching...' : `Found ${results.search.userCount} results.`}</p>
			{results && (
				<>
					<UserSearchResultList nodes={results.search.edges} />
					<button
						disabled={!results.search.pageInfo.hasPreviousPage}
						onClick={() => {
							getData({
								variables: {
									username,
									before: results.search.pageInfo.startCursor,
									last: 12,
								},
							});
						}}
					>
						Previous
					</button>
					<button
						disabled={!results.search.pageInfo.hasNextPage}
						onClick={() => {
							getData({
								variables: {
									username,
									after: results.search.pageInfo.endCursor,
									first: 12,
								},
							});
						}}
					>
						Next
					</button>
				</>
			)}
		</div>
	);
};

export default UserSearch;
