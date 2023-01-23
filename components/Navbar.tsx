import { useRouter } from 'next/router';
import Link from 'next/link';

const navigation = [{ id: 1, title: 'Home', path: '/' }];
const Navbar = () => {
	const { pathname } = useRouter();
	return (
		<nav>
			<div>
				{navigation.map(({ id, title, path }) => (
					<Link
						key={id}
						href={path}
						style={pathname === path ? { color: 'red' } : {}}
					>
						{title}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
