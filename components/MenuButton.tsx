type MenuButtonType = {
	menuOpen: boolean;
	setMenuOpenCb: (n: boolean) => void;
};

const spanStyle =
	'block absolute h-[2px] bg-black opacity-1 left-0 rotate-0 transition duration-250 ease-in-out';

const MenuButton = ({ menuOpen, setMenuOpenCb }: MenuButtonType) => (
	<button
		className="absolute top-6 right-0 z-50 md:hidden transition duration-150 ease-in-out"
		onClick={() => setMenuOpenCb(!menuOpen)}
	>
		<div className="w-[32px] h-[24px] relative mx-auto rotate-0 transition duration-500 ease-in-out">
			<span
				className={`${spanStyle} top-0 ${
					menuOpen ? 'top-[9px] w-0 left-[50%]' : 'w-[100%]'
				}`}
			></span>
			<span
				className={`${spanStyle} top-[9px] w-[100%] ${
					menuOpen ? 'rotate-45' : ''
				}`}
			></span>
			<span
				className={`${spanStyle} top-[9px] w-[100%] ${
					menuOpen ? '-rotate-45' : ''
				}`}
			></span>
			<span
				className={`${spanStyle} top-[18px] ${
					menuOpen ? 'top-[18px] w-0 left-[50%]' : 'w-[100%]'
				}`}
			></span>
		</div>
	</button>
);

export default MenuButton;
