import { useContext, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { OverlayContext } from "../../layouts/TasksLayout";

function TaskContent() {
	const { task, toggleOverlay, handleUpdateTask } = useContext(OverlayContext);
	const [editedText, setEditedText] = useState(task?.body);
	const [isEditable, setIsEditable] = useState(false);
	const textRef = useRef(null);

	function handleClick(e) {
		e.preventDefault();
		if (e.target.innerText === "Edit") {
			setIsEditable(true);
			setTimeout(() => {
				textRef.current?.focus();
			}, 0);
			return;
		}
		setIsEditable(false);
		handleUpdateTask({ ...task, body: editedText, isDone: false });
		toggleOverlay(e);
	}

	function handleChange({ target }) {
		const newText = target.value;
		setEditedText(newText);
	}

	return (
		<article className="form">
			<form onSubmit={handleClick} className="flex flex-col">
				<button
					type="button"
					id="card"
					className="text-2xl ml-auto"
					onClick={toggleOverlay}
				>
					<MdClose />
				</button>
				<p type="text" className="w-full break-all">
					{editedText}
				</p>
				{isEditable && (
					<input
						ref={textRef}
						type="text"
						value={editedText}
						onChange={handleChange}
						className="rounded-lg py-1.5 px-2 mt-2"
					/>
				)}
				<div className="flex justify-between items-center pt-2 mt-2 border-t border-primary-black-200">
					<span className="inline-block text-xs">{task?.time}</span>
					<button className={`btn btn-primary px-3`} onClick={handleClick}>
						{isEditable ? "Save" : "Edit"}
					</button>
				</div>
			</form>
		</article>
	);
}

export default TaskContent;
