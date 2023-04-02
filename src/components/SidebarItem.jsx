import { NavLink } from "react-router-dom";

function SidebarItem({ item, icon, children }) {
	return (
		<li>
			<NavLink className="menu__link" to={item.path}>
				{item.title} {icon}
			</NavLink>
			{children}
		</li>
	);
}

export default SidebarItem;
