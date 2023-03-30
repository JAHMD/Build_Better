import { useRef, useState } from "react";
import Card from "../components/Card";
import NewTaskForm from "../components/NewTaskForm";
import Overlay from "../components/Overlay";
import TaskContent from "../components/TaskContent";

function Tasks() {
	const [isTaskForm, setIsTaskForm] = useState(false);
	const [isTaskCard, setIsTaskCard] = useState(false);
	const [toggleOverlay, setToggleOverlay] = useState(false);
	const clickedTaskRef = useRef(null);
	const [tasks, setTasks] = useState(() => {
		return JSON.parse(localStorage.getItem("tasks")) || [];
	});
	const tasksElements = tasks?.map((task) => (
		<Card
			key={task.id}
			task={task}
			deleteTask={handleDeleteTask}
			toggleOverlay={handleOverlay}
		/>
	));

	function handleAddTask(task) {
		const updatedTasks = [task, ...tasks];
		localStorage.setItem("tasks", JSON.stringify(updatedTasks));
		setTasks(updatedTasks);
	}

	function handleOverlay({ target }, task) {
		clickedTaskRef.current = task;
		const clickedElement = target.closest("#new-task");
		if (clickedElement) {
			setIsTaskForm((oldState) => !oldState);
		} else {
			setIsTaskCard((oldState) => !oldState);
		}
		setToggleOverlay((oldState) => !oldState);
	}

	function handleDeleteTask(id) {
		const updatedTasks = tasks.filter((task) => task.id !== id);
		localStorage.setItem("tasks", JSON.stringify(updatedTasks));
		setTasks(updatedTasks);
	}

	return (
		<section className="section grid gap-6 items-start">
			{toggleOverlay && (
				<Overlay>
					{isTaskForm && (
						<NewTaskForm
							handleAddTask={handleAddTask}
							toggleOverlay={handleOverlay}
						/>
					)}
					{isTaskCard && (
						<TaskContent
							toggleOverlay={handleOverlay}
							task={clickedTaskRef.current}
						/>
					)}
				</Overlay>
			)}
			<div className="flex items-center justify-between bg-primary-brown-100 py-4 px-5 rounded-lg">
				<button
					className="btn btn-primary px-6"
					id="new-task"
					onClick={handleOverlay}
				>
					New task
				</button>
				<h2 className="text-2xl font-bold text-primary-black-100">Todo</h2>
			</div>
			<div className="tasks h-full overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{tasksElements}
			</div>
		</section>
	);
}

export default Tasks;
