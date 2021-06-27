import { gql } from '@apollo/client';

const USER_QUERY = gql`
	query UserDetails($username: String!) {
		user(login: $username) {
			id
			login
			name
			avatarUrl
			bio
			createdAt
			websiteUrl
			twitterUsername
			company
			followers {
				totalCount
			}
			following {
				totalCount
			}
			contributionsCollection {
				startedAt
				contributionCalendar {
					totalContributions
				}
				totalCommitContributions
				totalIssueContributions
				totalRepositoryContributions
				totalPullRequestContributions
				totalPullRequestReviewContributions
			}
		}
	}
`;

export default USER_QUERY;
