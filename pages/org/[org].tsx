import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';

const USER_SEARCH_QUERY = gql`
	query UserDetails($org: String!) {
		organization(login: $org) {
			name
			login
		}
	}
`;

const OrgPage = (): JSX.Element => {
	const router = useRouter();
	const { org } = router.query;
	const { loading, error, data } = useQuery(USER_SEARCH_QUERY, {
		variables: { org },
	});

	if (error) {
		return (
			<div>
				<p>Error!</p>
				<p>{error}</p>
			</div>
		);
	}

	if (loading) {
		return (
			<div>
				<p>Loading...</p>
			</div>
		);
	}

	return (
		<div>
			<h1>{data.organization.name}</h1>
			<p>{data.organization.login}</p>
		</div>
	);
};

export default OrgPage;
