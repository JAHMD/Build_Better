import { useState } from "react";
import Card from "../components/Card";
import Overlay from "../components/Overlay";

function Tasks() {
	const [toggleNewTask, setToggleNewTask] = useState(false);
	const [tasks, setTasks] = useState([]);
	const tasksElements = tasks?.map((task) => (
		<Card key={task.id} task={task} />
	));

	function handleToggleOverlay() {
		setToggleNewTask((oldState) => !oldState);
	}

	function handleTasks(task) {
		setTasks((prevTasks) => [...prevTasks, task]);
	}

	return (
		<section className="section grid gap-6 items-start">
			{toggleNewTask && (
				<Overlay
					handleAddTask={handleTasks}
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
			<div className="tasks h-full overflow-y-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{tasksElements}
			</div>
		</section>
	);
}

export default Tasks;

// useEffect(() => {
// 	let leastGridOfTasks = Number.POSITIVE_INFINITY;
// 	grids.map((grid, girdIndex) => {
// 		if (grid.length < leastGridOfTasks) {
// 			leastGridOfTasks = girdIndex;
// 		}
// 	});
// 	setGrids((oldGrids) => {
// 		return oldGrids.map((grid, idx) =>
// 			idx === leastGridOfTasks ? [...grid, task] : grid
// 		);
// 	});
// }, []);
