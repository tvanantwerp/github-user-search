import { gql } from '@apollo/client';

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

export default USER_SEARCH_QUERY;
