import Link from 'next/link';
import React from 'react';
import Layout from './Layout';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import socialMedia, { SocialMediaName } from './../constants/socialMediaLinks';

const Footer = () => {
	const icons: Record<SocialMediaName, JSX.Element> = {
		linkedin: <BsLinkedin />,
		github: <BsGithub />,
	};
	return (
		<footer className="w-full border-t-2 border-solid border-dark font-medium text-lg py-8">
			<Layout>
				<div className="flex items-center justify-between ">
					<div>
						{new Date().getFullYear()} &copy; All Rights Reserved.
					</div>
					<div className="flex items-center justify-between">
						<IconContext.Provider
							value={{
								color: 'rgb(8 145 178)',
								size: '2rem',
							}}
						>
							{Object.values(socialMedia).map(({ url, key }) => (
								<Link
									key={key}
									target="_blank"
									href={url}
									className="mx-4 hover:-translate-y-0.5 transition"
								>
									{icons[key]}
								</Link>
							))}
						</IconContext.Provider>
					</div>
					<div>
						Built by{' '}
						<Link
							className="underline underline-offset-4 hover:text-cyan-600"
							target="_blank"
							href={socialMedia.github.url}
						>
							Vitali Sakalou
						</Link>{' '}
					</div>
				</div>
			</Layout>
		</footer>
	);
};

export default Footer;
