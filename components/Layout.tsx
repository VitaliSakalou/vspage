import React from 'react';

type LayoutProps = {
	children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
	<div className="sm:px-8 md:px-12 2xl:px-24">{children}</div>
);

export default Layout;
