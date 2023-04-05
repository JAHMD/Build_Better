import { createContext, useRef } from "react";
import Card from "../components/Card";
import { useCardsFunctions } from "../hooks/useCardsFunctions";
import useCompletedTask from "../hooks/useCompletedTask";
import useHandleOverlay from "../hooks/useHandleOverlay";
import SectionHeader from "../layouts/SectionHeader";

export const CardDoneContext = createContext(null);

/**TODO:
 * handle cards functions in the done section.
 *
 */

function Done() {
	const {
		dataSet: tasks,
		setDataSet,
		handleDeleteTask,
	} = useCardsFunctions("tasks");

	const { handleOverlay } = useHandleOverlay();
	const { handleCompletedTasks } = useCompletedTask(tasks, setDataSet);
	const clickedTaskRef = useRef(null);
	useHandleOverlay(clickedTaskRef);

	const completedTasksElements = tasks.map((task) => {
		if (task.isDone) {
			return (
				<Card
					key={task.id}
					task={task}
					deleteTask={handleDeleteTask}
					toggleOverlay={handleOverlay}
					handleCompletedTasks={handleCompletedTasks}
				/>
			);
		}
	});

	return (
		<section className="section">
			<SectionHeader>
				<h2 className="section__heading ml-auto">Done</h2>
			</SectionHeader>
			<div className="cards-container">{completedTasksElements}</div>
		</section>
	);
}

export default Done;
