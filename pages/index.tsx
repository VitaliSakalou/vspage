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
import Footer from '../components/Footer';
import Header from '../components/Header';
import Contact from '../components/Contact';

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
					companyUrl
					dateTo
					dateFrom
					description
					location
				}
				contact(where: { id: "clhcuehgn9n3f0audig3i5hbg" }) {
					contactGreeting
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
	const {
		greeting: { name, description, title },
		contact: { contactGreeting },
		skill: { technologies },
		experiences,
	} = data;

	return (
		<>
			<Head>
				<title>Home page</title>
			</Head>
			<Header />
			<main className="sm:px-8 md:px-12 2xl:px-24">
				{/* <div style={{ color: 'red' }}>
					<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString(data.greeting.title).start();
						}}
					/>
				</div> */}
				<section id={'greeting'}>
					<Greeting
						name={name}
						description={description}
						title={title}
					/>
				</section>
				<section id={'skills'}>
					<Skills skills={technologies} />
				</section>
				<section id={'experience'}>
					<Experience experiences={experiences} />
				</section>
				<section id={'contact'}>
					<Contact contactGreeting={contactGreeting} />
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Home;
