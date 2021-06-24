import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';

const USER_SEARCH_QUERY = gql`
	query UserDetails($username: String!) {
		user(login: $username) {
			name
			login
		}
	}
`;

const UserSearch = (): JSX.Element => {
	const router = useRouter();
	const { username } = router.query;
	const { loading, error, data } = useQuery(USER_SEARCH_QUERY, {
		variables: { username },
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
			<h1>{data.user.name}</h1>
			<p>{data.user.login}</p>
		</div>
	);
};

export default UserSearch;
