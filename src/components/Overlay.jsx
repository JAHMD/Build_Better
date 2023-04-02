function Overlay({ children }) {
	return (
		<div className="p-4 fixed top-0 left-0 h-full w-full bg-primary-black-200/40 flex justify-center items-center z-10">
			{children}
		</div>
	);
}

export default Overlay;
