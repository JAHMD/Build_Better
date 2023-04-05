import {
	MdAddTask,
	MdDoneAll,
	MdEdit,
	MdKeyboardArrowDown,
	MdMoreTime,
	MdOutlineCalculate,
	MdSettings,
} from "react-icons/md";

export const sidebarItems = [
	{
		id: 1,
		title: "Tasks",
		path: "/Build_Better/",
		icon: <MdKeyboardArrowDown />,
		children: [
			{ id: 1, title: "All", path: "/Build_Better/", icon: <MdAddTask /> },
			{ id: 2, title: "Done", path: "/Build_Better/done", icon: <MdDoneAll /> },
		],
	},
	{
		id: 2,
		title: "Notes",
		path: "notes",
		icon: <MdEdit />,
	},
	{
		id: 3,
		title: "Pomodoro",
		path: "pomodoro",
		icon: <MdMoreTime />,
	},
	{
		id: 4,
		title: "Calculator",
		path: "calculator",
		icon: <MdOutlineCalculate />,
	},
	{
		id: 5,
		title: "Settings",
		path: "settings",
		icon: <MdSettings />,
	},
];
