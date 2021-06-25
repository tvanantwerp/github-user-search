import { gql } from '@apollo/client';

const USER_SEARCH_QUERY = gql`
	query UserSearch($username: String!) {
		search(query: $username, type: USER, first: 12) {
			userCount
			edges {
				cursor
				node {
					... on User {
						avatarUrl(size: 50)
						createdAt
						login
						name
						id
						__typename
					}
					... on Organization {
						avatarUrl(size: 50)
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
