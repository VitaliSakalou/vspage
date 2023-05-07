import React from 'react';
import Image from 'next/image';
import avatar from '../public/images/avatar.jpeg';
import { AnimatedText } from './AnimatedText';
import Link from 'next/link';

type GreetingType = {
	name: string;
	description: string;
	title: string;
};

const Greeting = ({ name, description, title }: GreetingType) => {
	return (
		<div className="flex items-center text-dark w-full min-h-screen">
			<div className="flex items-center justify-between w-full">
				<div className="w-1/2">
					<Image
						src={avatar}
						alt="GreetingImage"
						className="w-full h-auto"
					/>
				</div>
				<div className="w-1/2 flex flex-col items-center self-center">
					<AnimatedText
						text={title}
						className="!text-6xl !text-left"
					/>
					<p className="my-4 text-base font-medium">{description}</p>
					<div className="flex items-center self-start mt-2">
						<Link
							download
							href="/ResumeVitaliSakalou.docx"
							target="_blank"
							className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
						hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
						>
							Resume&nbsp;
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
									d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
								/>
							</svg>
						</Link>
						<Link
							href="mailto:vitali.sakalou@gmail.com"
							target="_blank"
							className="ml-4 text-lg font-medium capitalize text-dark underline"
						>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Greeting;
