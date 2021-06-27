import UserSearch from 'components/search/UserSearch';
import { Context } from '@apollo/client';

import client from 'apollo-client';
import USER_SEARCH_QUERY from 'queries/UserSearchQuery';

export default function Home({ data }: any) {
	return (
		<div>
			<main>
				<UserSearch initialData={data} />
			</main>
		</div>
	);
}

export async function getStaticProps(context: Context) {
	const username = '';
	const { data } = await client.query({
		query: USER_SEARCH_QUERY,
		variables: { username, first: 12 },
	});

	return {
		props: {
			data,
		},
	};
}
