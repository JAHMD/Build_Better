import { useContext, useMemo } from "react";
import Task from "../components/tasks/Task";
import { OverlayContext } from "../layouts/TasksLayout";

function Completed() {
	const { toggleOverlay, handleDeleteTask, handleCompletedTasks } =
		useContext(OverlayContext);
	const tasks = useMemo(() => JSON.parse(localStorage.getItem("tasks")) || []);

	const completedTasksElements = tasks.map((task) => {
		if (task.isDone) {
			return (
				<Task
					key={task.id}
					task={task}
					deleteTask={handleDeleteTask}
					toggleOverlay={toggleOverlay}
					handleCompletedTasks={handleCompletedTasks}
				/>
			);
		}
	});

	return <div className="cards-container">{completedTasksElements}</div>;
}

export default Completed;
