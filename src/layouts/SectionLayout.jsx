import { createContext, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NewTaskForm from "../components/NewTaskForm";
import Overlay from "../components/Overlay";
import TaskContent from "../components/TaskContent";
import { useCardsFunctions } from "../hooks/useCardsFunctions";
import useCompletedTask from "../hooks/useCompletedTask";
import useHandleOverlay from "../hooks/useHandleOverlay";
import SectionHeader from "../layouts/SectionHeader";

export const OverlayContext = createContext(null);

function SectionOverlay() {
	const isDoneSection =
		useLocation().pathname.split("/").filter(Boolean)[2] === "done";
	const {
		handleAddTask,
		handleUpdateTask,
		dataSet: tasks,
		handleDeleteTask,
		setDataSet: setTasks,
	} = useCardsFunctions("tasks");

	const { handleCompletedTasks } = useCompletedTask(setTasks);
	const clickedTaskRef = useRef(null);
	const { isTaskForm, isTaskCard, isToggleOverlay, handleOverlay } =
		useHandleOverlay(clickedTaskRef);

	return (
		<section className="section">
			<OverlayContext.Provider
				value={{
					tasks,
					handleAddTask,
					handleUpdateTask,
					handleDeleteTask,
					handleCompletedTasks,
					toggleOverlay: handleOverlay,
					task: clickedTaskRef.current,
				}}
			>
				{isToggleOverlay && (
					<Overlay>
						{isTaskForm && <NewTaskForm />}
						{isTaskCard && <TaskContent />}
					</Overlay>
				)}
				<SectionHeader>
					{!isDoneSection && (
						<button
							className="btn btn-primary px-6"
							id="new-task"
							onClick={handleOverlay}
						>
							New task
						</button>
					)}
					<h2 className="section__heading">
						{isDoneSection ? "Done" : "Todo"}
					</h2>
				</SectionHeader>
				<Outlet />
			</OverlayContext.Provider>
		</section>
	);
}

export default SectionOverlay;
