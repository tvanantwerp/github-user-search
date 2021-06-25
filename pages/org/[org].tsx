import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';

import ORG_QUERY from 'queries/OrgQuery';

const OrgPage = (): JSX.Element => {
	const router = useRouter();
	const { org } = router.query;
	const { loading, error, data } = useQuery(ORG_QUERY, {
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
