import { useRouter } from 'next/router';
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import USER_QUERY from 'queries/UserQuery';
import Loading from 'components/Loading';
import { ButtonLink } from 'components/ui/Button';
import Heading from 'components/ui/Heading';
import HR from 'components/ui/HR';
import UserContainer from 'components/ui/UserContainer';

function formatDate(date: string): string {
	return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(date));
}

const Container = styled.div`
	display: grid;
	grid-gap: 1rem;
`;

const DetailsContainer = styled.div`
	display: grid;
	grid-gap: 1rem;
`;

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
			<Loading>
				<p>Loading...</p>
			</Loading>
		);
	}

	const name = data.user.name ? data.user.name : data.user.login;

	return (
		<Container>
			<Head>
				<title>{`${name} | GitHub User Search`}</title>
				<meta name="description" content={`Data about ${data.user.login} on GitHub.`} />
			</Head>
			<Heading>{name}</Heading>
			<HR />
			<UserContainer>
				<div>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={data.user.avatarUrl}
						alt={`User avatar for ${data.user.login}.`}
						width={300}
						height={300}
					/>
				</div>
				<DetailsContainer>
					<div>
						<h2>About</h2>
						{data.user.bio && (
							<p>
								<em>{data.user.bio}</em>
							</p>
						)}
						<p>
							<a href={data.user.url}>
								<strong>
									{data.user.name ? `${data.user.name} (AKA ${data.user.login})` : data.user.login}
								</strong>
							</a>{' '}
							has been a member of GitHub since <strong>{formatDate(data.user.createdAt)}</strong>.
							They have {data.user.followers.totalCount} followers and are follwing{' '}
							{data.user.following.totalCount} others.{' '}
							{data.user.company ? `Currently, ${name} is working at ${data.user.company}.` : ''}
						</p>
					</div>
					<div>
						<h2>Contributions</h2>
						<p>
							Since {formatDate(data.user.contributionsCollection.startedAt)}, {name} has made{' '}
							<strong>
								{data.user.contributionsCollection.contributionCalendar.totalContributions}{' '}
								contributions
							</strong>{' '}
							on GitHub. Of those, {data.user.contributionsCollection.totalCommitContributions} were
							commits, {data.user.contributionsCollection.totalIssueContributions} were issues, and{' '}
							{data.user.contributionsCollection.totalPullRequestContributions} were opened pull
							requests.
						</p>
					</div>
					<div>
						<h3>Learn More</h3>
						<p>
							See {name}&apos;s GitHub profile page{' '}
							<a href={data.user.url} target="_blank" rel="noopener noreferrer">
								here
							</a>
							.{' '}
							{data.user.websiteUrl ? (
								<span>
									You can visit {name}&apos;s website at{' '}
									<a
										href={
											data.user.websiteUrl.match(/^http/)
												? data.user.websiteUrl
												: 'https://' + data.user.websiteUrl
										}
										target="_blank"
										rel="noopener noreferrer"
									>
										{data.user.websiteUrl}
									</a>
									.{' '}
								</span>
							) : (
								''
							)}
							{data.user.twitterUsername ? (
								<span>
									They can also be found on Twitter at{' '}
									<a
										href={`https://twitter.com/${data.user.twitterUsername}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										{data.user.twitterUsername}
									</a>
									.{' '}
								</span>
							) : (
								''
							)}
						</p>
					</div>
				</DetailsContainer>
			</UserContainer>
			<ButtonLink href={data.user.url} target="_blank" rel="noopener noreferrer">
				See GitHub Profile
			</ButtonLink>
		</Container>
	);
};

export default UserPage;
