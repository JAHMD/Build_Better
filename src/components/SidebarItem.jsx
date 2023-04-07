import { NavLink } from "react-router-dom";

function SidebarItem({ item, children }) {
	const { title, icon, path } = item;
	return (
		<li>
			{item.children ? (
				<h2 className="border-b pb-2">{title}</h2>
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
