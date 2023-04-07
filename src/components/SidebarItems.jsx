import { sidebarItems } from "../data/sidebarData";
import SidebarItem from "./SidebarItem";

function SidebarItems({ nestedItems }) {
	const items = nestedItems || sidebarItems;

	return (
		<ul
			className={`grid gap-6 select-none ${
				nestedItems ? "bg-primary-brown-100/5 p-4 mt-4 rounded-lg" : "px-6"
			}`}
		>
			{items.map((item) => {
				return (
					<SidebarItem key={item.id} item={item}>
						{item.children && <SidebarItems nestedItems={item.children} />}
					</SidebarItem>
				);
			})}
		</ul>
	);
}

export default SidebarItems;
