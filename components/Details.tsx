import React, { useRef } from 'react';
import LiIcon from './LiIcon';
import { motion } from 'framer-motion';
import { DetailsType } from './Experience';
import moment from 'moment';

const Details = ({
	role,
	companyName,
	dateTo,
	dateFrom,
	description,
	location,
}: DetailsType) => {
	const liRef = useRef(null);

	return (
		<li
			ref={liRef}
			className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between"
		>
			<LiIcon reference={liRef} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: 'spring' }}
			>
				<h3 className="capitalize font-bold text-2xl">
					{role}&nbsp;{' '}
					<span className="capitalize text-cyan-600">
						@{companyName}
					</span>
				</h3>
				<span className="capitalize font-medium text-dark/75">
					{moment(dateFrom).format('MMMM YYYY')} -{' '}
					{dateTo ? moment(dateTo).format('MMMM YYYY') : 'Present'} |{' '}
					{location}
				</span>
				<p className="font-medium w-full">{description}</p>
			</motion.div>
		</li>
	);
};

export default Details;
