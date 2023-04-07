import { useEffect, useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();
	const [isUser, setIsUser] = useState(() => {
		return JSON.parse(localStorage.getItem("user")) || false;
	});

	console.log(JSON.parse(localStorage.getItem("user")), isUser);

	useEffect(() => {
		if (isUser) {
			navigate("tasks/all");
		} else {
			setIsUser(true);
			localStorage.setItem("user", true);
		}
	}, []);

	return (
		<section className="rounded-lg h-full p-6 md:p-8 bg-primary-brown-200-30 shadow-md">
			<div className="h-full rounded-lg p-4 flex flex-col justify-center items-center gap-4 bg-primary-brown-100-90 text-center">
				<h1 className="text-3xl font-bold">Welcome to Build Better</h1>
				<p className="max-w-md">
					We're here to help you get things done and achieve your goals. With
					our customizable task manager, note-taking tools, Pomodoro timer,
					you'll be able to build better habits and reach new heights.
				</p>
				<NavLink
					to="tasks/all"
					className="btn btn-primary px-4 w-fit flex justify-between items-center gap-2 group"
				>
					Get Started{" "}
					<MdArrowRightAlt className="text-xl group-hover:animate-bounce" />
				</NavLink>
			</div>
		</section>
	);
}

export default Home;
