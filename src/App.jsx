import { Outlet } from "react-router-dom";
import bgImage from "./assets/images/Alone-pana 1.svg";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="flex min-h-screen px-6 sm:px-10">
			<img
				src={bgImage}
				alt="background image"
				className="h-full sm:w-full object-cover sm:object-top fixed top-0 left-0 -z-10"
				aria-hidden="true"
			/>
			<Sidebar />
			{/* h-[calc(100vh-104px)] sm:h-[calc(100vh-120px)]  */}
			<main className="xl:container mt-20 mb-6 sm:mb-10 p-6 md:p-8 transition-all text-primary-black-50 flex-1 bg-primary-brown-200-30 rounded-md">
				<h1 className="w-full text-center font-imperialScript text-5xl md:text-7xl fixed top-6 md:top-8 left-1/2 -translate-x-1/2 -z-[1]">
					Build better
				</h1>
				<Outlet />
			</main>
		</div>
	);
}

export default App;
