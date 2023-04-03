import Link from 'next/link';
import navigation from '../constants/navigation';
import classNames from 'classnames';

type DesktopNavbarType = {
	menuOpen: boolean;
	setMenuOpenCb: (n: boolean) => void;
	aspath: string;
};

const DesktopNavbar = ({
	menuOpen,
	setMenuOpenCb,
	aspath,
}: DesktopNavbarType) => {
	return (
		<div
			onClick={() => {
				if (menuOpen) {
					setMenuOpenCb(false);
				}
			}}
			onScroll={(e) => e.stopPropagation()}
			className={'static flex justify-end'}
		>
			<div
				className="h-fit w-fit bg-slate-500"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<nav className="flex justify-center">
					<ul className="inline-flex justify-center items-center flex-row space-x-8">
						{navigation.map(({ id, title, path }) => {
							const linkStyle = classNames('my-0', {
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
						<li className="my-0">
							<button className="resume-btn">Resume</button>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default DesktopNavbar;
