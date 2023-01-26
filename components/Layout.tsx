import Header from './Header';
import Footer from './Footer';
import React from 'react';
import Container from '@mui/material/Container';

type LayoutProps = {
	children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
	<Container maxWidth="md">
		<Header />
		{children}
		<Footer />
	</Container>
);

export default Layout;
