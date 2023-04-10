import React from 'react';
import { motion } from 'framer-motion';

type SkillType = {
	name: string;
	x: string;
	y: string;
};

const Skill = ({ name, x, y }: SkillType) => {
	return (
		<motion.div
			className="flex items-center justify-center rounded-full font-semibold sm:text-sm  sm:bg-dark sm:text-light sm:py-1.5 sm:px-3 shadow-dark cursor-pointer 
            absolute lg:py-3 lg:px-6 lg:text-lg md:text-md md:py-2 md:px-4 bg-transparent text-dark sm:text-bold"
			whileHover={{ scale: 1.2 }}
			initial={{ x: 0, y: 0 }}
			whileInView={{ x, y }}
			transition={{ duration: 1.5 }}
			viewport={{ once: true }}
		>
			{name}
		</motion.div>
	);
};

export default Skill;
