import Link from 'next/link';
import navigation from '../constants/navigation';
import classNames from 'classnames';

type MobileNavbarType = {
	menuOpen: boolean;
	setMenuOpenCb: (n: boolean) => void;
	aspath: string;
};

const MobileNavbar = ({
	menuOpen,
	setMenuOpenCb,
	aspath,
}: MobileNavbarType) => {
	return (
		<div
			onClick={() => {
				if (menuOpen) {
					setMenuOpenCb(false);
				}
			}}
			onScroll={(e) => e.stopPropagation()}
			className={`${
				menuOpen ? 'right-0 left-0' : 'left-[100%]'
			} fixed flex z-50  bottom-0 backdrop-blur-[8px] backdrop-brightness-75 justify-end transition-left duration-[500ms]  w-full`}
		>
			<div
				className="bg-white p-6 pt-16 w-[80%] h-[100vh]"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<nav className="flex justify-center">
					<ul className="inline-flex justify-center flex-col items-center">
						{navigation.map(({ id, title, path }) => {
							const linkStyle = classNames('my-8', {
								'text-red-400': aspath === path,
							});
							return (
								<li key={id} className={linkStyle}>
									<Link
										className={`menu-link`}
										href={path}
										onClick={(e) => {
											if (menuOpen) {
												setMenuOpenCb(false);
											}
										}}
									>
										{title}
									</Link>
								</li>
							);
						})}
						<li className="my-8">
							<button className="resume-btn">Resume</button>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default MobileNavbar;
