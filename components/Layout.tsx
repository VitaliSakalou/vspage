import Header from './Header';
import Footer from './Footer';
import React from 'react';

type LayoutProps = {
	children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
	<div className="max-w-screen-xl mx-auto">
		<Header />
		{children}
		<Footer />
	</div>
);

export default Layout;
