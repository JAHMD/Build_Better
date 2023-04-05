function SectionOverlay({ children, ref }) {
	const [isTaskForm, setIsTaskForm] = useState(false);
	const [isTaskCard, setIsTaskCard] = useState(false);
	return (
		<section ref={ref} className="section">
			{toggleOverlay && (
				<OverlayContext.Provider
					value={{
						handleAddTask,
						toggleOverlay: handleOverlay,
						handleUpdateTask,
						task: clickedTaskRef.current,
					}}
				>
					<Overlay>
						{isTaskForm && <NewTaskForm />}
						{isTaskCard && <TaskContent />}
					</Overlay>
					{children}
				</OverlayContext.Provider>
			)}
		</section>
	);
}

export default SectionOverlay;
