import React from 'react';
import Image from 'next/image';
import avatar from '../public/images/avatar.jpeg';

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
				<div className="w-1/2"></div>
			</div>
		</div>
	);
};

export default Greeting;
