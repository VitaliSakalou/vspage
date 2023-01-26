import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import oneUp from '../public/1up.jpeg';
import { gql } from '@apollo/client';
import Link from 'next/link';
import client from '../apolloClient';
import Typewriter from 'typewriter-effect';

export const getStaticProps = async () => {
	const { data } = await client.query({
		query: gql`
			query {
				greeting(where: { id: "cld83dcckvs1x0an7f5x99aet" }) {
					title
					name
					description
					id
				}
				about(where: { id: "cld82sehoveh00bn2f2px1ool" }) {
					title
					description {
						text
					}
					id
					technologies
				}
				experiences {
					role
					companyName
					id
				}
			}
		`,
	});
	if (!data) {
		return {
			notFound: true,
		};
	}
	return {
		props: { data },
	};
};

const Home = ({ data }: any) => {
	console.log({ data });
	return (
		<>
			<Head>
				<title>Home page</title>
			</Head>
			<h1>Hello world!</h1>
			<div style={{ color: 'red' }}>
				<Typewriter
					onInit={(typewriter) => {
						typewriter.typeString(data.greeting.title).start();
					}}
				/>
			</div>

			<div>
				<h3>{data.greeting.name}</h3>
				<p>{data.greeting.description}</p>
			</div>
			<br />
			<div>
				<h3>{data.about.title}</h3>
				<p>{data.about.description.text}</p>
				<div>
					{data.about.technologies.map((item: string) => (
						<p key={item}>{item}</p>
					))}
				</div>
			</div>
			<br />
			<div>
				<h3>Experience</h3>
				{data.experiences.map((item: any) => {
					return (
						<div key={item.id}>
							<p>{item.role}</p>
							<p>{item.companyName}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Home;
