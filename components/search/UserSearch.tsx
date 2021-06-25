import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';

import UserSearchResultList from 'components/search/UserSearchResultList';
import USER_SEARCH_QUERY from 'queries/UserSearchQuery';

const UserSearch = ({ initialData }: any): JSX.Element => {
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

	return (
		<div>
			<input type="search" onChange={(e) => getData({ variables: { username: e.target.value } })} />
			<p>{loading ? 'Searching...' : `Found ${results.search.userCount} results.`}</p>
			{results && (
				<>
					<UserSearchResultList nodes={results.search.edges} />
				</>
			)}
		</div>
	);
};

export default UserSearch;
