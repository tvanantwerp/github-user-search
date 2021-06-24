import Head from 'next/head';
import UserSearch from '../components/UserSearch';

export default function Home() {
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
				<UserSearch />
			</main>

			<footer></footer>
		</div>
	);
}
