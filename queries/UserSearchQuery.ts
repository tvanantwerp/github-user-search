import { gql } from '@apollo/client';

const USER_SEARCH_QUERY = gql`
	query UserSearch($username: String!, $after: String, $before: String, $first: Int, $last: Int) {
		search(
			query: $username
			type: USER
			first: $first
			last: $last
			after: $after
			before: $before
		) {
			pageInfo {
				hasPreviousPage
				hasNextPage
				startCursor
				endCursor
			}
			userCount
			edges {
				node {
					... on User {
						avatarUrl(size: 100)
						createdAt
						login
						name
						id
						__typename
					}
					... on Organization {
						avatarUrl(size: 100)
						createdAt
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

export default USER_SEARCH_QUERY;
