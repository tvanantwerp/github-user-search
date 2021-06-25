import Head from 'next/head';
import UserSearch from 'components/search/UserSearch';
import { Context } from '@apollo/client';

import client from 'apollo-client';
import USER_SEARCH_QUERY from 'queries/UserSearchQuery';

export default function Home({ data }: any) {
	return (
		<div>
			<Head>
				<title>GitHub User Search</title>
				<meta
					name="description"
					content="Search GitHub users by their username and explore data about them."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<UserSearch initialData={data} />
			</main>

			<footer></footer>
		</div>
	);
}

export async function getStaticProps(context: Context) {
	const username = '';
	const { data } = await client.query({ query: USER_SEARCH_QUERY, variables: { username } });

	return {
		props: {
			data,
		},
	};
}
