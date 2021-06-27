import { gql } from '@apollo/client';

const ORG_QUERY = gql`
	query OrgDetails($org: String!) {
		organization(login: $org) {
			id
			login
			name
			description
			url
			avatarUrl
			createdAt
			websiteUrl
			twitterUsername
			repositories {
				totalCount
			}
		}
	}
`;

export default ORG_QUERY;
