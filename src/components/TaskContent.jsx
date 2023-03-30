import React from "react";
import { MdClose, MdMode } from "react-icons/md";

function TaskContent({ task, toggleOverlay }) {
	return (
		<article className="form">
			<div className="flex flex-col">
				<button id="card" className="text-2xl ml-auto" onClick={toggleOverlay}>
					<MdClose />
				</button>
				<p className="w-full break-words">{task.body}</p>
			</div>
			<div className="flex justify-between items-center pt-2 border-t border-primary-black-200">
				<span className="inline-block text-xs">{task.time}</span>
				<button className="btn btn-primary">
					<MdMode />
				</button>
			</div>
		</article>
	);
}

export default TaskContent;
