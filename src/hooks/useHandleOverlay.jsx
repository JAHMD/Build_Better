import { useState } from "react";

function useHandleOverlay(clickedTaskRef = null) {
	const [isTaskForm, setIsTaskForm] = useState(false);
	const [isTaskCard, setIsTaskCard] = useState(false);
	const [isToggleOverlay, setToggleOverlay] = useState(false);

	const handleOverlay = ({ target }, task) => {
		clickedTaskRef.current = task;
		const clickedElement = target.closest("#new-task");
		if (clickedElement) {
			setIsTaskForm((oldState) => !oldState);
		} else {
			setIsTaskCard((oldState) => !oldState);
		}
		setToggleOverlay((oldState) => !oldState);
	};

	return { isTaskForm, isTaskCard, isToggleOverlay, handleOverlay };
}

export default useHandleOverlay;
