import sidebarItems from "../data/sidebar.json";

// icons
import {
	MdAddTask,
	MdEdit,
	MdMoreTime,
	MdOutlineCalculate,
	MdSettings,
} from "react-icons/md";
import SidebarItem from "./SidebarItem";

function SidebarItems() {
	const icons = [
		<MdAddTask />,
		<MdEdit />,
		<MdMoreTime />,
		<MdOutlineCalculate />,
		<MdSettings />,
	];
	const sidebarElements = sidebarItems.map((item) => {
		return (
			<SidebarItem key={item.iconIdx} item={item} icon={icons[item.iconIdx]} />
		);
	});

	return <ul className="mx-6 mt-24 grid gap-6">{sidebarElements}</ul>;
}

export default SidebarItems;
