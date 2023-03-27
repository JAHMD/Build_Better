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
import NotFound from "./pages/NotFound";
import Tasks from "./pages/Tasks";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="Build_Better/" element={<App />}>
			<Route index element={<Tasks />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
