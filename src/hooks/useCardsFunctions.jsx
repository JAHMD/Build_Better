import { useCallback, useState } from "react";

export function useCardsFunctions(data) {
	const [dataSet, setDataSet] = useState(() => {
		return JSON.parse(localStorage.getItem(data)) || [];
	});

	const handleAddTask = useCallback((task) => {
		const updatedTasks = [task, ...dataSet];
		handleSettingTasks(updatedTasks);
	});

	const handleDeleteTask = useCallback((id) => {
		const updatedTasks = dataSet.filter((task) => task.id !== id);
		handleSettingTasks(updatedTasks);
	});

	const handleUpdateTask = useCallback((passedTasks) => {
		const filteredTasks = dataSet.filter((task) => task.id !== passedTasks.id);
		const updatedTasks = [passedTasks, ...filteredTasks];
		handleSettingTasks(updatedTasks);
	});

	const handleSettingTasks = useCallback((tasks) => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
		setDataSet(tasks);
	});

	return {
		dataSet,
		setDataSet,
		handleAddTask,
		handleDeleteTask,
		handleUpdateTask,
	};
}
