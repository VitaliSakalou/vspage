/* eslint-disable @next/next/no-page-custom-font */
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-mont',
});

const App = ({ Component, pageProps }: AppProps) => (
	<div className={`${montserrat.variable} font-mont`}>
		<Component {...pageProps} />
	</div>
);

export default App;
