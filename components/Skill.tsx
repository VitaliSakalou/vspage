import React from 'react';
import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';

type SkillType = {
	name: string;
	skillIcon: JSX.Element;
	x: string;
	y: string;
};

const Skill = ({ name, x, y, skillIcon }: SkillType) => {
	return (
		<motion.div
			// className="flex items-center justify-center rounded-full font-semibold sm:text-sm  sm:bg-dark sm:text-light sm:py-1.5 sm:px-3 shadow-dark cursor-pointer
			// absolute lg:py-3 lg:px-6 lg:text-lg md:text-md md:py-2 md:px-4 bg-transparent text-dark sm:text-bold"
			className="flex items-center justify-center rounded-full font-semibold sm:text-sm  sm:bg-dark sm:text-light sm:py-1 sm:px-1.5 shadow-dark cursor-pointer
			absolute lg:py-1.5 lg:px-2 lg:text-lg md:text-md md:py-1 md:px-2 bg-transparent text-dark sm:text-bold"
			whileHover={{ scale: 1.2 }}
			initial={{ x: 0, y: 0 }}
			whileInView={{ x, y }}
			transition={{ duration: 1.5 }}
			viewport={{ once: true }}
		>
			<IconContext.Provider
				value={{
					size: '2rem',
				}}
			>
				{skillIcon}&nbsp;{' '}
			</IconContext.Provider>
			{name}
		</motion.div>
	);
};

export default Skill;
