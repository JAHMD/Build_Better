import { useContext, useMemo } from "react";
import Card from "../components/Card";
import { OverlayContext } from "../layouts/SectionLayout";

function AllTasks() {
	const { toggleOverlay, handleDeleteTask, handleCompletedTasks } =
		useContext(OverlayContext);
	const tasks = useMemo(() => JSON.parse(localStorage.getItem("tasks")));

	const tasksElements = useMemo(
		() =>
			tasks.map((task) => {
				if (!task.isDone) {
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
			}),
		[tasks]
	);

	return <div className="cards-container">{tasksElements}</div>;
}

export default AllTasks;
