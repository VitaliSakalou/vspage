import {
	SiReact,
	SiRedux,
	SiJavascript,
	SiGraphql,
	SiHtml5,
	SiTypescript,
	SiCss3,
	SiExpress,
	SiElectron,
	SiMongodb,
	SiTailwindcss,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BsGit } from 'react-icons/bs';
import { IoLogoNodejs, IoLogoNpm } from 'react-icons/io';

const skillsInfo: Array<{
	x: string;
	y: string;
	key: string;
	icon: JSX.Element;
}> = [
	{ x: '0vw', y: '-22vw', key: 'react', icon: <SiReact /> },
	{ x: '-5vw', y: '-13vw', key: 'redux', icon: <SiRedux /> },
	{ x: '10vw', y: '-3vw', key: 'javascript', icon: <SiJavascript /> },
	{ x: '0vw', y: '13vw', key: 'next', icon: <TbBrandNextjs /> },
	{ x: '-20vw', y: '-15vw', key: 'graphql', icon: <SiGraphql /> },
	{ x: '15vw', y: '-12vw', key: 'html', icon: <SiHtml5 /> },
	{ x: '27vw', y: '-5vw', key: 'typescript', icon: <SiTypescript /> },
	{ x: '0vw', y: '22vw', key: 'nodejs', icon: <IoLogoNodejs /> },
	{ x: '-15vw', y: '-5vw', key: 'css', icon: <SiCss3 /> },
	{ x: '17vw', y: '17vw', key: 'electron', icon: <SiElectron /> },
	{ x: '-27vw', y: '-2vw', key: 'express', icon: <SiExpress /> },
	{ x: '13vw', y: '8vw', key: 'git', icon: <BsGit /> },
	{ x: '22vw', y: '2vw', key: 'npm', icon: <IoLogoNpm /> },
	{ x: '-10vw', y: '2vw', key: 'mongodb', icon: <SiMongodb /> },
	{ x: '-17vw', y: '12vw', key: 'tailwind', icon: <SiTailwindcss /> },
	{ x: '25vw', y: '2vw', key: 'react', icon: <SiReact /> },
	{ x: '10vw', y: '-10vw', key: 'react', icon: <SiReact /> },
	{ x: '-15vw', y: '15vw', key: 'react', icon: <SiReact /> },
	{ x: '20vw', y: '10vw', key: 'react', icon: <SiReact /> },
	{ x: '-25vw', y: '2vw', key: 'react', icon: <SiReact /> },
];

export default skillsInfo;
