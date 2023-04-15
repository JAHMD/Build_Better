import { nanoid } from "nanoid";
import { useContext, useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { OverlayContext } from "../../layouts/TasksLayout";

function NewTaskForm() {
	const { toggleOverlay, handleAddTask } = useContext(OverlayContext);
	const inputRef = useRef(null);
	const closeBtnRef = useRef(null);
	const [newTask, setNewTask] = useState(() => {
		return {
			id: "",
			body: "",
			time: "",
			isDone: false,
		};
	});

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	function handleTaskSubmit(e) {
		e.preventDefault();
		if (newTask.body) {
			handleAddTask(newTask);
			closeBtnRef?.current?.click();
		}
	}
	function handleChange({ target }) {
		const time = new Date().toLocaleString();
		setNewTask((prevState) => ({
			...prevState,
			body: target.value,
			id: nanoid(),
			time,
		}));
	}

	return (
		<form className="form" onSubmit={handleTaskSubmit}>
			<div className="flex justify-between items-center pb-2 border-b-2 border-primary-black-100/90">
				<p className="font-bold text-xl">Add new task</p>
				<button
					ref={closeBtnRef}
					type="button"
					className="text-2xl"
					id="new-task"
					onClick={toggleOverlay}
				>
					<MdClose />
				</button>
			</div>

			<label htmlFor="task-input">Task:</label>
			<input
				ref={inputRef}
				className="rounded-lg py-2 px-4"
				type="text"
				id="task-input"
				value={newTask.body}
				onChange={handleChange}
			/>
			<button className="btn btn-primary mt-2">Submit</button>
		</form>
	);
}

export default NewTaskForm;
