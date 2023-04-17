import {
	MdAddTask,
	MdDoneAll,
	MdEdit,
	MdHome,
	MdKeyboardArrowDown,
	MdMoreTime,
	MdOutlineCalculate,
	MdSettings,
} from "react-icons/md";

export const sidebarItems = [
	{
		id: 0,
		title: "Home",
		path: "/Build_Better/",
		icon: <MdHome />,
	},
	{
		id: 1,
		title: "Tasks",
		path: "tasks",
		icon: <MdKeyboardArrowDown />,
		children: [
			{ id: 1, title: "All", path: "tasks/all", icon: <MdAddTask /> },
			{
				id: 2,
				title: "Completed",
				path: "tasks/completed",
				icon: <MdDoneAll />,
			},
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
];
