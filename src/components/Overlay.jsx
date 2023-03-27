import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";

function Overlay({ toggleOverlay, handleAddTask }) {
	const inputRef = useRef(null);
	const [newTask, setNewTask] = useState(() => {
		return {
			id: "",
			body: "",
			time: "",
			isDone: false,
		};
	});

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	function handleTaskSubmit(e) {
		e.preventDefault();
		if (newTask.body) {
			handleAddTask(newTask);
			toggleOverlay();
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
		<div className="p-4 absolute top-0 left-0 h-full w-full bg-primary-black-200/30 flex justify-center items-center">
			<form
				className="relative card w-80 max-w-full"
				onSubmit={handleTaskSubmit}
			>
				<button
					type="button"
					className="absolute top-4 right-4 text-2xl"
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
		</div>
	);
}

export default Overlay;
