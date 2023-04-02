import { useRef, useState } from "react";
import { MdClose } from "react-icons/md";

function TaskContent({ task, toggleOverlay, handleUpdateTask }) {
	const [updatedTask, setUpdatedTask] = useState(task);
	const [isEditable, setIsEditable] = useState(false);
	const textRef = useRef();
	const maxLength = 280;

	function handleEditClick() {
		setIsEditable(true);
	}

	function handleSaveClick(e) {
		setIsEditable(false);
		handleUpdateTask(updatedTask);
		toggleOverlay(e);
	}

	function handleChange({ target }) {
		const newText = target.innerText;
		if (newText.length < maxLength) {
			setUpdatedTask((oldTask) => ({ ...oldTask, body: newText }));
		}
	}

	return (
		<article className="form">
			<div className="flex flex-col">
				<button id="card" className="text-2xl ml-auto" onClick={toggleOverlay}>
					<MdClose />
				</button>
				<p
					ref={textRef}
					className="w-full break-words"
					contentEditable="true"
					onInput={handleChange}
					onClick={handleEditClick}
					maxLength={maxLength}
				>
					{task.body}
				</p>
			</div>
			<div className="flex justify-between items-center pt-2 border-t border-primary-black-200">
				<span className="inline-block text-xs">{task.time}</span>
				{isEditable ? (
					<button
						id="card"
						className="btn btn-primary px-3"
						onClick={handleSaveClick}
					>
						Save
					</button>
				) : (
					""
				)}
			</div>
		</article>
	);
}

export default TaskContent;
