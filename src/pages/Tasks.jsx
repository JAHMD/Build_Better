import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import NewTaskForm from "../components/NewTaskForm";
import Overlay from "../components/Overlay";
import TaskContent from "../components/TaskContent";

function Tasks() {
	const tasksRef = useRef(null);
	const sectionRef = useRef(null);
	const [hasBottom, setHasBottom] = useState(false);
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

	useEffect(() => {
		setHasBottom(false);
		const tasksDivSize = tasksRef.current.getBoundingClientRect().height;
		const sectionSize = sectionRef.current.getBoundingClientRect().height - 162;
		if (tasksDivSize > sectionSize) {
			setHasBottom(true);
		}
	}, [tasks]);

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

	function handleUpdateTask(updatedTask) {
		const updatedTasks = tasks.map((task) =>
			task.id === updatedTask.id ? updatedTask : task
		);
		localStorage.setItem("tasks", JSON.stringify(updatedTasks));
		setTasks(updatedTasks);
	}

	return (
		<section ref={sectionRef} className="section grid gap-6 content-start">
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
							handleUpdateTask={handleUpdateTask}
							toggleOverlay={handleOverlay}
							task={clickedTaskRef.current}
						/>
					)}
				</Overlay>
			)}
			<div className="flex items-center justify-between bg-primary-brown-100 py-4 px-5 rounded-lg drop-shadow-md">
				<button
					className="btn btn-primary px-6"
					id="new-task"
					onClick={handleOverlay}
				>
					New task
				</button>
				<h2 className="text-2xl font-bold text-primary-black-100">Todo</h2>
			</div>
			<div
				ref={tasksRef}
				className="h-full overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 drop-shadow-md rounded-lg"
			>
				{tasksElements}
			</div>
			{hasBottom && (
				<span className="h-4 w-[calc(100%-48px)] md:w-[calc(100%-64px)] absolute left-6 md:left-8 bottom-6 md:bottom-8 bg-gradient-to-t from-primary-brown-200-30 to-transparent rounded-b-lg"></span>
			)}
		</section>
	);
}

export default Tasks;
