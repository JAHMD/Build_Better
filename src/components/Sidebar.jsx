import { useState } from "react";
import { NavLink } from "react-router-dom";
// icons
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

	const handleMenuClick = () => {
		setToggleMenu((oldState) => !oldState);
	};

	return (
		<header className="absolute top-0 left-0">
			<button
				className="ml-6 mt-6 p-2 rounded-md text-xl hover:bg-primary-brown-200/80 text-primary-brown-100 bg-primary-brown-200 transition-colors"
				onClick={handleMenuClick}
			>
				<HiMenu />
			</button>

			<aside className={`sidebar ${toggleMenue ? "active" : ""}`}>
				<button className="menu-btn mx-6" onClick={handleMenuClick}>
					<h2>Menu</h2>
					<HiX />
				</button>
				<ul className="mx-6 mt-24 grid gap-6">
					<li>
						<NavLink className="menu__link" to="/">
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
			</aside>
		</header>
	);
}

export default Sidebar;
