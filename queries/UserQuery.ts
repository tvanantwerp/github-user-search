import { gql } from '@apollo/client';

const USER_QUERY = gql`
	query UserDetails($username: String!) {
		user(login: $username) {
			name
			login
		}
	}
`;

export default USER_QUERY;
