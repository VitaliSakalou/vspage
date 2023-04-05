/* eslint-disable @next/next/no-page-custom-font */
import '../styles/globals.scss';
import Layout from '../components/Layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-mont',
});

const App = ({ Component, pageProps }: AppProps) => (
	<Layout>
		<main className={`${montserrat.variable} font-mont`}>
			<Component {...pageProps} />
		</main>
	</Layout>
);

export default App;
