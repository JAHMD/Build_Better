import { nanoid } from "nanoid";
import React, { useContext, useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { OverlayContext } from "../layouts/TasksLayout";

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
			<button
				ref={closeBtnRef}
				type="button"
				className="absolute top-5 right-5 text-2xl"
				id="new-task"
				onClick={toggleOverlay}
			>
				<MdClose />
			</button>
			<label htmlFor="task-input">Task:</label>
			<input
				ref={inputRef}
				className="rounded-lg py-2 px-4 outline-transparent"
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
