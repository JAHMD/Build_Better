import { useEffect, useRef, useState } from "react";
import ProgressCircle from "./ProgressCircle";

function Timer() {
	const workTime = 25 * 60;
	const breakTime = 5 * 60;
	const [time, setTime] = useState(workTime);
	const [displayTime, setDisplayTime] = useState(`00:00`);
	const [progressDevider, setProgressDevider] = useState(workTime);
	const progress = (time * 100) / progressDevider;
	const intervalId = useRef(null);

	useEffect(() => {
		handleTimer();

		return () => clearInterval(intervalId.current);
	}, [time]);

	function handleTimer() {
		intervalId.current = setInterval(() => {
			console.log("first");
			const remainsTime = time - 1;
			const seconds = remainsTime % 60;
			const dispSeconds = `0${seconds}`.slice(-2);

			const minutes = remainsTime / 60;
			const dispMinutes = `0${Math.floor(minutes)}`.slice(-2);

			if (remainsTime >= 0) {
				setTime(remainsTime);
				setDisplayTime(`${dispMinutes}:${dispSeconds}`);
			} else {
				clearInterval(intervalId.current);
			}
		}, 1000);
	}

	function handleWorkTime() {
		setTime(workTime);
		setProgressDevider(workTime);
	}

	function handleBreakTime() {
		setTime(breakTime);
		setProgressDevider(breakTime);
	}

	return (
		<div className="w-full h-full flex flex-col justify-center rounded-lg p-4 py-8 bg-primary-brown-100-90 drop-shadow-md">
			<div className="btns-container">
				<button
					className="btn btn-primary px-4 rounded-full"
					onClick={handleWorkTime}
				>
					Work
				</button>
				<button
					className="btn btn-primary px-4 rounded-full"
					onClick={handleBreakTime}
				>
					Break
				</button>
			</div>
			<ProgressCircle progress={progress} time={displayTime} />
			<div className="btns-container">
				<button
					className="btn btn-primary px-4 rounded-full"
					onClick={handleTimer}
				>
					Start
				</button>
				<button
					className="btn btn-primary px-4 rounded-full"
					onClick={() => clearInterval(intervalId.current)}
				>
					Pause
				</button>
			</div>
		</div>
	);
}

export default Timer;
