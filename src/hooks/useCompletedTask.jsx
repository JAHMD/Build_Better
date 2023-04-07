import { useCallback } from "react";

function useCompletedTask(setTasks) {
	const handleCompletedTasks = useCallback((id) => {
		const currentTasks = JSON.parse(localStorage.getItem("tasks"));
		const updatedTasks = currentTasks.map((task) =>
			task.id === id ? { ...task, isDone: !task.isDone } : task
		);
		const filteredTasks = currentTasks.filter((task) => task.id !== id);
		localStorage.setItem("tasks", JSON.stringify(updatedTasks));
		setTasks(filteredTasks);
	}, []);

	return { handleCompletedTasks };
}

export default useCompletedTask;
