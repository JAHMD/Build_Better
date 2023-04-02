function NotFound() {
	return (
		<section className="section flex justify-center items-center flex-col">
			<div className="bg-primary-brown-100-90 rounded-lg p-6 w-full h-full flex items-center justify-center flex-col">
				<h2 className="text-4xl font-bold">Oops!</h2>
				<p className="text-xl sm:text-2xl font-semibold mt-2">
					Page not found.
				</p>
			</div>
		</section>
	);
}

export default NotFound;
