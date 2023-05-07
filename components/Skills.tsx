import React from 'react';
import { motion } from 'framer-motion';
import skillsInfo from '../constants/skills';
import Skill from './Skill';
import { TbWorldWww } from 'react-icons/tb';
import { IconContext } from 'react-icons';

type SkillsType = {
	skills: Array<string>;
};

const Skills = ({ skills }: SkillsType) => {
	return (
		<div className="my-64">
			<h2 className="font-bold text-6xl w-full text-center md:text-8xl 2xl:mb-32 ">
				Skills
			</h2>
			<div className="w-full h-[50vh] md:h-[80vh] md:min-h-[900px] md:max-h-[1250px] lg:h-screen relative flex items-center justify-center rounded-full bg-circularLightSm md:bg-circularLight">
				<motion.div
					className="flex items-center justify-center rounded-full font-semibold sm:text-sm  sm:bg-dark sm:text-light sm:py-3 sm:px-3 shadow-dark cursor-pointer 
                    absolute lg:py-6 lg:px-6 lg:text-lg md:text-md md:py-4 md:px-4 bg-transparent text-dark sm:text-bold"
					whileHover={{ scale: 1.5 }}
					transition={{ duration: 1.5 }}
				>
					<IconContext.Provider
						value={{
							size: '2rem',
						}}
					>
						<TbWorldWww />
						Web
					</IconContext.Provider>
				</motion.div>
				{skills?.map((item: string, index: number) => (
					<Skill
						key={item}
						name={item}
						skillIcon={skillsInfo[index].icon}
						x={skillsInfo[index].x}
						y={skillsInfo[index].y}
					/>
				))}
			</div>
		</div>
	);
};

export default Skills;
