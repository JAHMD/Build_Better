import { MdArrowRightAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Home() {
	return (
		<section className="rounded-lg h-full p-6 md:p-8 bg-primary-brown-200-30 shadow-md">
			<div className="h-full rounded-lg p-4 flex flex-col justify-center items-center gap-4 bg-primary-brown-100-90 text-center">
				<h1 className="text-2xl sm:text-3xl font-bold">
					Welcome to Build Better
				</h1>
				<p className="max-w-md text-sm sm:text-base">
					We're here to help you get things done and achieve your goals. With
					our customizable task manager, note-taking tools, Pomodoro timer,
					you'll be able to build better habits and reach new heights.
				</p>
				<NavLink
					to="tasks/all"
					className="btn btn-primary px-4 w-fit flex justify-between items-center gap-2"
				>
					Get Started <MdArrowRightAlt className="text-xl animate-bounce" />
				</NavLink>
			</div>
		</section>
	);
}

export default Home;
