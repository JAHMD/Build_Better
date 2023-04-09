import { NavLink } from "react-router-dom";

function NotFound() {
	return (
		<section className="section flex justify-center items-center flex-col">
			<div className="bg-primary-brown-100-90 rounded-lg p-6 w-full h-full flex items-center justify-center flex-col">
				<h2 className="text-4xl font-bold">Oops!</h2>
				<p className="text-xl sm:text-2xl font-semibold mt-2">
					Page not found.
				</p>
				<div className="">
					<NavLink to="/Build_Better/" className="link">
						Home Page
					</NavLink>
					&nbsp;
					<NavLink to="/Build_Better/tasks/all" className="link">
						Tasks Page
					</NavLink>
				</div>
			</div>
		</section>
	);
}

export default NotFound;
