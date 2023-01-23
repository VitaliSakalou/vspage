/* eslint-disable @next/next/no-page-custom-font */
import '../styles/globals.scss';
import Layout from '../components/Layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => (
	<Layout>
		{/* <Head>
			<link
				href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;1,200&display=swap"
				rel="stylesheet"
			/>
		</Head> */}
		<main>
			<Component {...pageProps} />
		</main>
	</Layout>
);

export default App;
