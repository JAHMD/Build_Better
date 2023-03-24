import { Outlet } from "react-router-dom";
import bgImage from "./assets/images/Alone-pana 1.svg";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="flex min-h-screen">
			<img
				src={bgImage}
				alt="background image"
				className="h-full sm:w-full object-cover sm:object-top fixed top-0 left-0 -z-10"
				aria-hidden="true"
			/>
			<Sidebar />
			<main className="mx-6 sm:mx-10 mt-20 mb-6 sm:mb-10 transition-all text-primary-black-50 flex-1 py-10 bg-primary-brown-200-30 rounded-md p-8">
				<h1 className="w-full text-center font-imperialScript text-5xl md:text-7xl absolute top-6 md:top-8 left-1/2 -translate-x-1/2 -z-[1]">
					Build better
				</h1>
				<Outlet />
			</main>
		</div>
	);
}

export default App;
