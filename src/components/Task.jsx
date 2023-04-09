import { MdDelete } from "react-icons/md";

function Task({ task, deleteTask, toggleOverlay, handleCompletedTasks }) {
	return (
		<article className="card">
			<div className="flex justify-between items-center gap-2">
				<p
					className={`task-content ${task.isDone ? "line-through" : ""}`}
					id="card"
					onClick={(e) => toggleOverlay(e, task)}
				>
					{task.body}
				</p>
				<button
					className="btn btn-primary px-2"
					onClick={() => deleteTask(task.id)}
				>
					<MdDelete />
				</button>
			</div>
			<div className="flex items-center justify-between flex-wrap gap-3 pt-2 border-t border-primary-black-200">
				<span className="inline-block text-xs">{task.time}</span>
				<button
					className="btn w-full btn-primary text-sm font-semibold"
					onClick={() => handleCompletedTasks(task.id)}
				>
					{task.isDone ? "Uncomplete" : "Complete"}
				</button>
			</div>
		</article>
	);
}

export default Task;
