function Overlay({ children }) {
	return (
		<div className="p-4 absolute top-0 left-0 h-full w-full bg-primary-black-200/30 flex justify-center items-center z-10">
			{children}
		</div>
	);
}

export default Overlay;
