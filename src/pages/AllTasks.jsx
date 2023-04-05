import { createContext, useEffect, useMemo, useRef, useState } from "react";
import Card from "../components/Card";
import NewTaskForm from "../components/NewTaskForm";
import Overlay from "../components/Overlay";
import TaskContent from "../components/TaskContent";
import { useCardsFunctions } from "../hooks/useCardsFunctions";
import useCompletedTask from "../hooks/useCompletedTask";
import useHandleOverlay from "../hooks/useHandleOverlay";
import SectionHeader from "../layouts/SectionHeader";

export const OverlayContext = createContext(null);
export const CardContext = createContext(null);

function AllTasks() {
	const {
		dataSet: tasks,
		setDataSet: setTasks,
		handleAddTask,
		handleDeleteTask,
		handleUpdateTask,
	} = useCardsFunctions("tasks");

	const clickedTaskRef = useRef(null);
	const { isTaskForm, isTaskCard, isToggleOverlay, handleOverlay } =
		useHandleOverlay(clickedTaskRef);

	const { handleCompletedTasks } = useCompletedTask(tasks, setTasks);

	const tasksRef = useRef(null);
	const sectionRef = useRef(null);
	const [hasBottom, setHasBottom] = useState(false);
	const tasksElements = useMemo(
		() =>
			tasks.map((task) => {
				if (!task.isDone) {
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
			}),
		[tasks]
	);

	useEffect(() => {
		setHasBottom(false);
		const tasksDivSize = tasksRef.current?.getBoundingClientRect()?.height;
		const sectionSize =
			sectionRef.current?.getBoundingClientRect()?.height - 162;
		if (tasksDivSize > sectionSize) {
			setHasBottom(true);
		}
	}, [tasks]);

	return (
		<section ref={sectionRef} className="section">
			{isToggleOverlay && (
				<OverlayContext.Provider
					value={{
						handleAddTask,
						toggleOverlay: handleOverlay,
						handleUpdateTask,
						task: clickedTaskRef.current,
					}}
				>
					<Overlay>
						{isTaskForm && <NewTaskForm />}
						{isTaskCard && <TaskContent />}
					</Overlay>
				</OverlayContext.Provider>
			)}
			<SectionHeader>
				<button
					className="btn btn-primary px-6"
					id="new-task"
					onClick={handleOverlay}
				>
					New task
				</button>
				<h2 className="section__heading">Todo</h2>
			</SectionHeader>
			<div ref={tasksRef} className="cards-container">
				{tasksElements}
			</div>
			{hasBottom && (
				<span className="h-5 w-[calc(100%-48px)] md:w-[calc(100%-64px)] absolute left-6 md:left-8 bottom-6 md:bottom-8 bg-gradient-to-t from-primary-brown-200/70 to-transparent rounded-b-lg"></span>
			)}
		</section>
	);
}

export default AllTasks;
