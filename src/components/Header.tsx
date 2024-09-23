import { ThemeToggle } from "./theme/theme-toggle";

const Header = () => {
	return (
		<header className="flex w-full h-16 items-center gap-4 border-b bg-background dark:bg-black px-4 md:px-6">
			<nav className="flex-auto flex flex-row justify-between text-lg font-medium md:flex-row md:gap-5 md:text-sm lg:gap-6">
				<a href="#" className="flex items-center gap-2 font-semibold text-base">
					<p className="text-xl">🇱🇰</p>
					<span className="text-xl text-slate-900 dark:text-slate-100">
						Sri Lanka Elections '24
					</span>
				</a>
				<ThemeToggle />
			</nav>
		</header>
	);
};

export default Header;
