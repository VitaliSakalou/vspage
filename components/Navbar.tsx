import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useWindowWidth from '../hooks/useWindowWidth';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import MenuButton from './MenuButton';
import breakpoints from '../constants/breakpoints';
import avatar from '../public/images/avatar.jpeg';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [aspath, setAsPath] = useState('');
	const width = useWindowWidth();

	useEffect(() => {
		const body = document.body;

		if (menuOpen) {
			body.style.overflow = 'hidden';
			body.style.position = 'fixed';
			body.addEventListener('touchmove', preventScrolling, {
				passive: false,
			});
		} else {
			body.style.overflow = 'auto';
			body.style.position = 'static';
			body.removeEventListener('touchmove', preventScrolling);
		}

		return () => {
			body.style.overflow = 'auto';
			body.style.position = 'static';
			body.removeEventListener('touchmove', preventScrolling);
		};
	}, [menuOpen]);

	useEffect(() => {
		if (width > breakpoints.md && menuOpen) {
			setMenuOpen(false);
		}
	}, [menuOpen, width]);

	const preventScrolling = (event: { preventDefault: () => void }) => {
		event.preventDefault();
	};

	const { asPath } = useRouter();
	useEffect(() => {
		setAsPath(asPath); //https://nextjs.org/docs/messages/react-hydration-error
	}, [asPath]);

	return (
		<div className="h-20 flex items-center justify-between mx-8 relative bg-white">
			<div>
				<Link href={'/'}>
					<Image
						src={avatar}
						className="w-14 ease-linear duration-300 rounded-full hue-rotate-60 hover:hue-rotate-0 opacity-100"
						alt="Avatar"
					/>
				</Link>
			</div>
			{width <= breakpoints.md && (
				<MobileNavbar
					menuOpen={menuOpen}
					setMenuOpenCb={setMenuOpen}
					aspath={aspath}
				/>
			)}
			{width > breakpoints.md && (
				<DesktopNavbar
					menuOpen={menuOpen}
					setMenuOpenCb={setMenuOpen}
					aspath={aspath}
				/>
			)}
			<MenuButton menuOpen={menuOpen} setMenuOpenCb={setMenuOpen} />
		</div>
	);
};

export default Navbar;
