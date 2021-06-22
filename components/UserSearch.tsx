import { useQuery, gql } from '@apollo/client';

const USER_SEARCH_QUERY = gql`
	query UserSearch($username: String!) {
		search(query: $username, type: USER, first: 10) {
			userCount
			edges {
				cursor
				node {
					... on User {
						id
						login
					}
				}
			}
		}
	}
`;

interface IUserSearchProps {
	username: string;
}

const UserSearch = ({ username }: IUserSearchProps): JSX.Element => {
	const { loading, error, data } = useQuery(USER_SEARCH_QUERY, {
		variables: { username },
	});

	if (loading) {
		return (
			<div>
				<p>Loading...</p>
			</div>
		);
	}
	if (error) {
		return (
			<div>
				<p>Error!</p>
				<p>{error}</p>
			</div>
		);
	}

	console.log(data);

	return (
		<div>
			<ol>
				{data.search.edges.map(({ node }: any) => (
					<li key={node.id}>{node.login}</li>
				))}
			</ol>
		</div>
	);
};

export default UserSearch;
