import React, { useRef } from 'react';
import Details from './Details';
import { motion, useScroll } from 'framer-motion';

export type DetailsType = {
	id: string;
	role: string;
	companyName: string;
	companyUrl: string;
	dateTo: string;
	dateFrom: string;
	description: string;
	location: string;
};

type ExperienceType = {
	experiences: Array<DetailsType>;
};

const Experience = ({ experiences }: ExperienceType) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'center start'],
	});
	return (
		<div className="my-64">
			<h2 className="font-bold text-8xl mb-32 w-full text-center">
				Experience
			</h2>
			<div ref={ref} className="w-[75%] mx-auto relative">
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
				/>
				<ul className="w-full flex flex-col item-start justify-between ml-4">
					{experiences?.map((item: DetailsType) => {
						return (
							<Details
								key={item.id}
								id={item.id}
								role={item.role}
								companyName={item.companyName}
								companyUrl={item.companyUrl}
								dateTo={item.dateTo}
								dateFrom={item.dateFrom}
								description={item.description}
								location={item.location}
							/>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Experience;
