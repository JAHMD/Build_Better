import { useState } from "react";
import Card from "../components/Card";
import Overlay from "../components/Overlay";

function Tasks() {
	const [toggleNewTask, setToggleNewTask] = useState(false);
	const [tasks, setTasks] = useState(() => {
		return JSON.parse(localStorage.getItem("tasks")) || [];
	});
	const tasksElements = tasks?.map((task) => (
		<Card key={task.id} task={task} deleteTask={handleDeleteTask} />
	));

	function handleToggleOverlay() {
		setToggleNewTask((oldState) => !oldState);
	}

	function handleAddTask(task) {
		const updatedTasks = [task, ...tasks];
		localStorage.setItem("tasks", JSON.stringify(updatedTasks));
		setTasks(updatedTasks);
	}

	function handleDeleteTask(id) {
		const updatedTasks = tasks.filter((task) => task.id !== id);
		localStorage.setItem("tasks", JSON.stringify(updatedTasks));
		setTasks(updatedTasks);
	}

	return (
		<section className="section grid gap-6 items-start">
			{toggleNewTask && (
				<Overlay
					handleAddTask={handleAddTask}
					toggleOverlay={handleToggleOverlay}
				/>
			)}
			<div className="flex items-center justify-between bg-primary-brown-100 py-4 px-5 rounded-lg">
				<button
					className="btn btn-primary px-6"
					onClick={() => setToggleNewTask((oldState) => !oldState)}
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
