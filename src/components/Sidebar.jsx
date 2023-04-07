import { useEffect, useRef, useState } from "react";
// icons
import { HiMenu, HiX } from "react-icons/hi";
import SidebarItems from "./SidebarItems";

function Sidebar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const headerRef = useRef(null);

	const handleMenuClick = () => {
		setIsMenuOpen((oldState) => !oldState);
	};

	useEffect(() => {
		function closeSidebar({ target }) {
			if (headerRef.current && !headerRef.current.contains(target)) {
				setIsMenuOpen(false);
			}
		}
		document.addEventListener("mousedown", closeSidebar);
		return () => {
			document.removeEventListener("mousedown", closeSidebar);
		};
	}, [headerRef]);

	return (
		<header ref={headerRef} className="absolute left-6 top-6 z-10">
			<button
				className="btn btn-primary text-xl"
				aria-label="menu button"
				onClick={handleMenuClick}
			>
				<HiMenu />
			</button>
			{isMenuOpen && (
				<nav className="sidebar overflow-auto" aria-label="sidebar navigation">
					<button className="menu-btn mx-6" onClick={handleMenuClick}>
						<h2>Menu</h2>
						<HiX />
					</button>
					<SidebarItems />
				</nav>
			)}
		</header>
	);
}

export default Sidebar;
