import { Outlet } from "react-router-dom";
import bgImage from "./assets/images/Alone-pana 1.svg";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="">
			<img
				src={bgImage}
				alt="background image"
				className="h-full sm:w-full object-cover sm:object-top fixed top-0 left-0 -z-10"
				aria-hidden="true"
			/>
			<Sidebar />
			<main className="h-[calc(100vh-110px)] mt-20 container p-container text-primary-black-50 flex-1">
				<h1
					className="w-full text-center font-imperialScript text-5xl md:text-7xl fixed top-6 md:top-8 left-1/2 -translate-x-1/2 -z-[1]"
					aria-hidden="true"
				>
					Build better
				</h1>
				<Outlet />
			</main>
		</div>
	);
}

export default App;
