import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import styled from 'styled-components';

import UserSearchResultList from 'components/search/UserSearchResultList';
import USER_SEARCH_QUERY from 'queries/UserSearchQuery';
import useDebounce from 'components/hooks/useDebounce';

const Layout = styled.div`
	display: grid;
	grid-gap: 1rem;
`;

const SearchStatus = styled.p`
	font-size: 1.2rem;
	text-align: center;
`;

const SearchInput = styled.input`
	border: 3px solid #333;
	border-radius: 20px;
	padding: 0.5rem 1rem;
`;

const PaginationContainer = styled.div`
	display: grid;
	grid-gap: 1rem;
	grid-template: auto / repeat(2, 1fr);
`;

const PaginationButton = styled.button`
	background-color: rgb(255, 255, 255);
	border: 3px solid #333;
	border-radius: 20px;
	color: #333;
	cursor: pointer;
	font-weight: 400;
	padding: 0.5rem 1rem;
	transition: font-weight 0.2s ease-in-out, background-color 0.2s ease-in-out;

	&:disabled,
	&:disabled:hover {
		background-color: #ccc;
		border-color: #666;
		cursor: not-allowed;
		font-weight: 400;
		text-decoration: line-through;
	}

	&:hover {
		background-color: rgb(139, 185, 151);
		font-weight: 700;
	}
`;

const UserSearch = ({ initialData }: any): JSX.Element => {
	const [username, setUsername] = useState('');
	const [results, setResults] = useState<any>(initialData);
	const [getData, { loading, error, data }] = useLazyQuery(USER_SEARCH_QUERY);

	useDebounce(
		() => {
			getData({ variables: { username, first: 12 } });
		},
		[username],
		300,
	);

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
		<Layout>
			<SearchInput
				type="search"
				placeholder="Search for username..."
				onChange={(e) => {
					setUsername(e.target.value);
				}}
			/>
			<SearchStatus>
				{loading ? 'Searching...' : `Found ${results.search.userCount} results.`}
			</SearchStatus>
			{results && (
				<>
					<UserSearchResultList nodes={results.search.edges} />
					<PaginationContainer>
						<PaginationButton
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
						</PaginationButton>
						<PaginationButton
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
						</PaginationButton>
					</PaginationContainer>
				</>
			)}
		</Layout>
	);
};

export default UserSearch;
