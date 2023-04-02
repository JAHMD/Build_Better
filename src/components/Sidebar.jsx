import { useEffect, useState } from "react";
// icons
import { useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import SidebarItems from "./SidebarItems";

function Sidebar() {
	const [toggleMenue, setToggleMenu] = useState(false);
	const asideRef = useRef(null);

	const handleMenuClick = () => {
		setToggleMenu((oldState) => !oldState);
	};

	useEffect(() => {
		function closeSidebar({ target }) {
			if (asideRef.current && !asideRef.current.contains(target)) {
				setToggleMenu(false);
			}
		}
		document.addEventListener("click", closeSidebar);
		return () => {
			document.removeEventListener("click", closeSidebar);
		};
	}, [asideRef]);

	return (
		<header ref={asideRef} className="absolute left-6 top-6 z-10">
			<button
				className="btn btn-primary text-xl"
				aria-label="menu button"
				onClick={handleMenuClick}
			>
				<HiMenu />
			</button>
			{toggleMenue && (
				<nav className="sidebar">
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
