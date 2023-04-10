import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import { gql } from '@apollo/client';
import Link from 'next/link';
import client from '../apolloClient';
import Typewriter from 'typewriter-effect';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Greeting from '../components/Greeting';

export const getStaticProps = async () => {
	const { data } = await client.query({
		query: gql`
			query {
				greeting(where: { id: "clga78iggb7mz0atz966gj2we" }) {
					description
					name
					title
				}
				skill(where: { id: "clgacw0e8bdbo0atzepcyiw0j" }) {
					technologies
				}
				experiences {
					id
					description
					role
					companyName
					dateTo
					dateFrom
					description
					location
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
	const { name, description, title } = data.greeting;
	const { technologies } = data.skill || {};
	const { experiences } = data;
	return (
		<>
			<Head>
				<title>Home page</title>
			</Head>
			<main>
				<div style={{ color: 'red' }}>
					<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString(data.greeting.title).start();
						}}
					/>
				</div>
				<div id={'greeting'}>
					<Greeting
						name={name}
						description={description}
						title={title}
					/>
				</div>
				<div id={'skills'}>
					<Skills skills={technologies} />
				</div>
				<div id={'experience'}>
					<Experience experiences={experiences} />
				</div>
			</main>
		</>
	);
};

export default Home;
