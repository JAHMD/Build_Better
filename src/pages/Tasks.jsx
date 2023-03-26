import { useEffect, useState } from "react";

function Tasks() {
	const tasks = [...new Array(5)].map((task, idx) => (
		<article
			key={idx}
			className="task p-5 rounded-lg bg-primary-brown-100-90 flex flex-col gap-2"
		>
			<p className="h-full mb-auto">
				Lorem ipsum dolor sit amet consectetur adipisicing e lit. asperiores
				ipsum, ipsa ratione doloribus perferendis provident culpa quo quae
				similique repellat quaerat in maxime nobis. Impedit dolorum suscipit?
			</p>
			<div className="pt-2 mt-2 border-t border-primary-black-200">
				January 08, 2022
			</div>
			<button className="p-2 bg-primary-black-100 text-primary-brown-100 rounded-lg">
				Done
			</button>
		</article>
	));
	const [grids, setGrids] = useState([[], [], [], []]);
	const [task, setTask] = useState(() => {
		return {
			body: "task",
			isDone: false,
			id: "",
		};
	});

	useEffect(() => {
		let leastGridOfTasks = Number.POSITIVE_INFINITY;
		grids.map((grid, girdIndex) => {
			if (grid.length < leastGridOfTasks) {
				leastGridOfTasks = girdIndex;
			}
		});
		setGrids((oldGrids) => {
			return oldGrids.map((grid, idx) =>
				idx === leastGridOfTasks ? [...grid, task] : grid
			);
		});
	}, []);

	return (
		<section className="rounded-lg h-full grid gap-4 items-start">
			<div className="flex items-center justify-between">
				<button className="rounded-lg py-2 px-6 bg-primary-black-100 text-primary-brown-100">
					New task
				</button>
				<h2 className="text-2xl font-bold text-primary-black-100">Todo</h2>
			</div>
			<div className="tasks h-full overflow-y-auto grid grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] gap-6">
				<div className="grid-flow">{tasks}</div>
				<div className="grid-flow">{tasks}</div>
				<div className="grid-flow">{tasks}</div>
				<div className="grid-flow">{tasks}</div>
			</div>
		</section>
	);
}

export default Tasks;
