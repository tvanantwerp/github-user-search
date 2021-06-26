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
				<link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
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
