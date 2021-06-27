import { useRouter } from 'next/router';
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import styled from 'styled-components';

import ORG_QUERY from 'queries/OrgQuery';

function formatDate(date: string): string {
	return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(date));
}

const Heading = styled.h1`
	margin: 0;
	padding: 1rem 0;
	text-align: center;
`;

const HR = styled.hr`
	border: 1.5px solid #333;
	border-radius: 3px;
	height: 0;
	margin: 0 0 2rem;
`;

const UserContainer = styled.div`
	display: grid;
	grid-gap: 1rem;

	@media (min-width: 500px) {
		grid-template-columns: 300px 1fr;
		grid-gap: 2rem;
	}

	img {
		border: 3px solid #333 !important;
		border-radius: 20px;
	}
`;

const DetailsContainer = styled.div`
	display: grid;
	grid-gap: 1rem;
`;

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
	const name = data.organization.name ? data.organization.name : data.organization.login;

	return (
		<div>
			<Head>
				<title>{`${name} | GitHub User Search`}</title>
				<meta name="description" content={`Data about ${data.organization.login} on GitHub.`} />
			</Head>
			<Heading>{name}</Heading>
			<HR />
			<UserContainer>
				<div>
					<Image
						src={data.organization.avatarUrl}
						alt={`User avatar for ${data.organization.login}.`}
						width={300}
						height={300}
					/>
				</div>
				<DetailsContainer>
					<div>
						<h2>About</h2>
						{data.organization.description && (
							<p>
								<em>{data.organization.description}</em>
							</p>
						)}
						<p>
							<a href={data.organization.url}>
								<strong>
									{data.organization.name
										? `${data.organization.name} (AKA ${data.organization.login})`
										: data.organization.login}
								</strong>
							</a>{' '}
							has been on GitHub since <strong>{formatDate(data.organization.createdAt)}</strong>.
							They own {data.organization.repositories.totalCount} repositories.
						</p>
					</div>
					<div>
						<h3>Learn More</h3>
						<p>
							See {name}&apos;s GitHub profile page{' '}
							<a href={data.organization.url} target="_blank" rel="noopener noreferrer">
								here
							</a>
							.{' '}
							{data.organization.websiteUrl ? (
								<span>
									You can visit {name}&apos;s website at{' '}
									<a
										href={
											data.organization.websiteUrl.match(/^http/)
												? data.organization.websiteUrl
												: 'https://' + data.organization.websiteUrl
										}
										target="_blank"
										rel="noopener noreferrer"
									>
										{data.organization.websiteUrl}
									</a>
									.{' '}
								</span>
							) : (
								''
							)}
							{data.organization.twitterUsername ? (
								<span>
									They can also be found on Twitter at{' '}
									<a
										href={`https://twitter.com/${data.organization.twitterUsername}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										{data.organization.twitterUsername}
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
		</div>
	);
};

export default OrgPage;
