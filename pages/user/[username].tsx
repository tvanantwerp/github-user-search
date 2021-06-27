import { useRouter } from 'next/router';
import Head from 'next/head';
import { useQuery, gql } from '@apollo/client';
import Image from 'next/image';

import USER_QUERY from 'queries/UserQuery';

const UserPage = (): JSX.Element => {
	const router = useRouter();
	const { username } = router.query;
	const { loading, error, data } = useQuery(USER_QUERY, {
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
			<Head>
				<title>{`${data.user.login} | GitHub User Search`}</title>
				<meta name="description" content={`Data about ${data.user.login} on GitHub.`} />
			</Head>
			<h1>{data.user.name}</h1>
			<Image
				src={data.user.avatarUrl}
				alt={`User avatar for ${data.user.login}.`}
				width={300}
				height={300}
			/>
			<p>{data.user.login}</p>
			{data.user.bio && <p>{data.user.bio}</p>}
			<div>
				<h2>Contributions</h2>
				<p>
					Since{' '}
					<strong>
						{new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
							new Date(data.user.contributionsCollection.startedAt),
						)}
					</strong>
					, <strong>{data.user.name ? data.user.name : data.user.login}</strong> has made{' '}
					<strong>
						{data.user.contributionsCollection.contributionCalendar.totalContributions}
					</strong>{' '}
					contributions on GitHub.
				</p>
			</div>
		</div>
	);
};

export default UserPage;
