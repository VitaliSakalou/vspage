type MenuButtonType = {
	menuOpen: boolean;
	setMenuOpenCb: (n: boolean) => void;
};

const spanStyle =
	'block absolute h-[2px] bg-black opacity-1 left-0 rotate-0 transition-closeButton duration-[300ms]';

const MenuButton = ({ menuOpen, setMenuOpenCb }: MenuButtonType) => (
	<button
		className="absolute top-6 right-0 z-50 md:hidden "
		onClick={() => setMenuOpenCb(!menuOpen)}
	>
		<div className="w-[32px] h-[24px] relative mx-auto rotate-0 ">
			<span
				className={`${spanStyle} ${
					menuOpen ? 'top-[9px] w-0 left-[50%]' : 'top-0 w-[32px]'
				}`}
			></span>
			<span
				className={`${spanStyle} top-[9px] w-[32px] ${
					menuOpen ? 'rotate-45' : ''
				}`}
			></span>
			<span
				className={`${spanStyle} top-[9px] w-[32px] ${
					menuOpen ? '-rotate-45' : ''
				}`}
			></span>
			<span
				className={`${spanStyle}  ${
					menuOpen
						? 'top-[9px] w-0 left-[50%]'
						: ' top-[18px] w-[32px]'
				}`}
			></span>
		</div>
	</button>
);

export default MenuButton;
