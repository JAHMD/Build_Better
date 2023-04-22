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
import TasksLayout from "./layouts/TasksLayout";
import AllTasks from "./pages/AllTasks";
import Completed from "./pages/Completed";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import NotFound from "./pages/NotFound";
import Pomodoro from "./pages/Pomodoro";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/Build_Better/" element={<App />}>
			<Route index element={<Home />} />
			<Route path="tasks" element={<TasksLayout />}>
				<Route path="all" element={<AllTasks />} />
				<Route path="completed" element={<Completed />} />
			</Route>
			<Route path="notes" element={<Notes />} />
			<Route path="pomodoro" element={<Pomodoro />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
