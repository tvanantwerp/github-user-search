import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';

import GlobalStyle from 'components/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
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
			<GlobalStyle />
			<Component {...pageProps} />
		</ApolloProvider>
	);
}
export default MyApp;
