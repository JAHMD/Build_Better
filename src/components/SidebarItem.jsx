import { NavLink } from "react-router-dom";

function SidebarItem({ item, children, toggleDropdown, isDropdownOpen }) {
	const { title, icon, path } = item;
	return (
		<li>
			{item.children ? (
				<h2 className="cursor-pointer menu__link" onClick={toggleDropdown}>
					{title}
					<span className={`${isDropdownOpen ? "rotate-180" : ""}`}>
						{icon}
					</span>
				</h2>
			) : (
				<NavLink className="menu__link" to={path}>
					{title} {icon}
				</NavLink>
			)}
			{children}
		</li>
	);
}

export default SidebarItem;
