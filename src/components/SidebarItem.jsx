import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SidebarContext } from "./Sidebar";

function SidebarItem({ item, children }) {
	const handleMenuClick = useContext(SidebarContext);
	const { title, icon, path } = item;
	return (
		<>
			{item.children ? (
				<li>
					<>
						<h2 className="border-b pb-2">{title}</h2>
						{children}
					</>
				</li>
			) : (
				<li onClick={handleMenuClick}>
					<NavLink className="menu__link" to={path}>
						{title} <span>{icon}</span>
					</NavLink>
				</li>
			)}
		</>
	);
}

export default SidebarItem;
