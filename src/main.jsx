import React from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";

// pages
import SectionOverlay from "./layouts/SectionLayout";
import AllTasks from "./pages/AllTasks";
import Done from "./pages/Done";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="Build_Better/" element={<App />}>
			<Route index element={<Home />} />
			<Route path="tasks" element={<SectionOverlay />}>
				<Route path="all" element={<AllTasks />} />
				<Route path="completed" element={<Done />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
