import { useContext, useMemo } from "react";
import Card from "../components/Card";
import { OverlayContext } from "../layouts/SectionLayout";

function Done() {
	const { toggleOverlay, handleDeleteTask, handleCompletedTasks } =
		useContext(OverlayContext);
	const tasks = useMemo(() => JSON.parse(localStorage.getItem("tasks")));

	const completedTasksElements = tasks.map((task) => {
		if (task.isDone) {
			return (
				<Card
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

export default Done;
