import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// icons
import { useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import {
	MdAddTask,
	MdEdit,
	MdMoreTime,
	MdOutlineCalculate,
	MdSettings,
} from "react-icons/md";

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
		<header ref={asideRef} className="container p-container sticky top-0 pt-2">
			<div className="rounded-lg py-3 px-4 bg-primary-header shadow-md">
				<button
					className="btn btn-primary text-xl"
					aria-label="menu button"
					onClick={handleMenuClick}
				>
					<HiMenu />
				</button>
				<nav className={`sidebar ${toggleMenue ? "active" : ""}`}>
					<button className="menu-btn mx-6" onClick={handleMenuClick}>
						<h2>Menu</h2>
						<HiX />
					</button>
					<ul className="mx-6 mt-24 grid gap-6">
						<li>
							<NavLink className="menu__link" to="/Build_Better/">
								Tasks <MdAddTask />
							</NavLink>
						</li>
						<li>
							<NavLink className="menu__link" to="notes">
								Notes <MdEdit />
							</NavLink>
						</li>
						<li>
							<NavLink className="menu__link" to="pomodoro">
								Pomodoro <MdMoreTime />
							</NavLink>
						</li>
						<li>
							<NavLink className="menu__link" to="calculator">
								Calculator <MdOutlineCalculate />
							</NavLink>
						</li>
						<li>
							<NavLink className="menu__link" to="settings">
								Settings <MdSettings />
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Sidebar;
