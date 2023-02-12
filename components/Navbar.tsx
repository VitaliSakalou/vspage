import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const navigation = [
	{ id: 'about', title: 'About', path: '/#about' },
	{ id: 'experience', title: 'Experience', path: '/#experience' },
	{ id: 'work', title: 'Work', path: '/#work' },
	{ id: 'contact', title: 'Contact', path: '/#contact' },
];

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
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

	const preventScrolling = (event: { preventDefault: () => void }) => {
		event.preventDefault();
	};

	const { asPath } = useRouter();
	return (
		<div className="h-20 flex items-center justify-between mx-8 relative bg-white">
			<div>
				<Link href={'/'}>Logo</Link>
			</div>
			<div
				onClick={() => {
					setMenuOpen(!menuOpen);
				}}
				onScroll={(e) => e.stopPropagation()}
				className={`${
					menuOpen
						? 'fixed flex z-50 inset-0 backdrop-blur-md backdrop-brightness-75 '
						: 'hidden'
				} md:static md:flex justify-end md:backdrop-blur-none  md:backdrop-filter-none`}
			>
				<div
					className="bg-white p-6 w-[70%] h-[100vh] md:h-fit md:w-fit"
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<nav className="flex justify-center">
						<ul className="inline-flex justify-center flex-col items-center md:flex-row md:space-x-8">
							{navigation.map(({ id, title, path }) => (
								<li key={id} className="my-8 md:my-0">
									<Link
										className="menu-link"
										href={path}
										onClick={(e) => {
											setMenuOpen(!menuOpen);
										}}
										style={
											asPath === path
												? { color: 'red' }
												: {}
										}
									>
										{title}
									</Link>
								</li>
							))}
							<li className="my-8 md:my-0">
								<button className="resume-btn">Resume</button>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<button
				className="absolute top-6 right-0 z-50 md:hidden transition duration-150 ease-in-out"
				onClick={() => setMenuOpen(!menuOpen)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d={
							menuOpen
								? 'M6 18L18 6M6 6l12 12'
								: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
						}
					/>
				</svg>
			</button>
		</div>
	);
};

export default Navbar;
