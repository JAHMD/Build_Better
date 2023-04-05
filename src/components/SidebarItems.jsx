import { useState } from "react";
import { sidebarItems } from "../data/sidebarData";
import SidebarItem from "./SidebarItem";

function SidebarItems({ nestedItems }) {
	const items = nestedItems || sidebarItems;
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	function hadnleDropdownToggle() {
		setIsDropdownOpen((oldState) => !oldState);
	}

	return (
		<ul
			className={`grid gap-6 overflow-hidden select-none ${
				nestedItems
					? "mx-1.5 bg-primary-brown-100/5 p-4 mt-4 rounded-lg"
					: "mx-6"
			}`}
		>
			{items.map((item) => {
				return (
					<SidebarItem
						key={item.id}
						item={item}
						isDropdownOpen={isDropdownOpen}
						toggleDropdown={hadnleDropdownToggle}
					>
						{isDropdownOpen && item.children && (
							<SidebarItems nestedItems={item.children} />
						)}
					</SidebarItem>
				);
			})}
		</ul>
	);
}

export default SidebarItems;
