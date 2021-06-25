import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';

import GlobalStyle from 'components/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ApolloProvider>
	);
}
export default MyApp;
