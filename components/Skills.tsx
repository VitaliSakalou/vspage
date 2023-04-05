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
			className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
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
			<h2 className="font-bold text-8xl mt-64 w-full text-center">
				Skills
			</h2>
			<div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
				<motion.div
					className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
					whileHover={{ scale: 1.05 }}
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
