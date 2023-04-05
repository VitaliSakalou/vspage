import React from 'react';
import { motion } from 'framer-motion';
import skillsCoordinates from '../constants/skills';

type SkillsType = {
	skills: Array<string>;
};
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

const Skills = ({ skills }: SkillsType) => {
	return (
		<>
			<h2 className="font-bold text-6xl mt-32 w-full text-center md:text-8xl md:mt-64">
				Skills
			</h2>
			<div className="w-full h-[50vh] md:h-[80vh] lg:h-screen relative flex items-center justify-center rounded-full bg-circularLightSm md:bg-circularLight">
				<motion.div
					className="flex items-center justify-center rounded-full font-semibold sm:text-sm  sm:bg-dark sm:text-light sm:py-3 sm:px-3 shadow-dark cursor-pointer 
                    absolute lg:py-6 lg:px-6 lg:text-lg md:text-md md:py-4 md:px-4 bg-transparent text-dark sm:text-bold"
					whileHover={{ scale: 1.5 }}
					transition={{ duration: 1.5 }}
				>
					Web
				</motion.div>
				{skills.map((item: string, index: number) => (
					<Skill
						key={item}
						name={item}
						x={skillsCoordinates[index].x}
						y={skillsCoordinates[index].y}
					/>
				))}
			</div>
		</>
	);
};

export default Skills;
