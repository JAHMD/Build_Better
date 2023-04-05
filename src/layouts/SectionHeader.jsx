function SectionHeader({ children }) {
	return (
		<div className="flex items-center justify-between bg-primary-brown-100 py-4 px-5 rounded-lg drop-shadow-md">
			{children}
		</div>
	);
}

export default SectionHeader;
