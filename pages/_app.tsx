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
	<div className={`${montserrat.variable} font-mont`}>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</div>
);

export default App;
