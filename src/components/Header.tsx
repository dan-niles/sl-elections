const Header = () => {
	return (
		<header className=" top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
			<nav className="flex-col text-lg font-medium flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
				<a href="#" className="flex items-center gap-2 font-semibold text-base">
					<p className="text-xl">🇱🇰</p>
					<span className="text-xl text-slate-900">
						Sri Lanka Elections '24
					</span>
				</a>
			</nav>
		</header>
	);
};

export default Header;
