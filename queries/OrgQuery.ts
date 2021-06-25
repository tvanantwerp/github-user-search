import { gql } from '@apollo/client';

const ORG_QUERY = gql`
	query OrgDetails($org: String!) {
		organization(login: $org) {
			name
			login
		}
	}
`;

export default ORG_QUERY;
