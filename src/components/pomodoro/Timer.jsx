import { useEffect, useRef, useState } from "react";
import audio from "../../assets/audio/beep-beep-6151.mp3";
import ProgressCircle from "./ProgressCircle";

function Timer() {
	const workTime = 25 * 60;
	const breakTime = 5 * 60;
	const [isBtnClicked, setIsBtnClicked] = useState(true);
	const [time, setTime] = useState(workTime);
	const [displayTime, setDisplayTime] = useState(`00:00`);
	const [progressDevider, setProgressDevider] = useState(workTime);
	const progress = (time * 100) / progressDevider;
	const intervalId = useRef(null);
	const audioRef = useRef(null);
	const puaseRef = useRef(null);

	console.log("first");

	useEffect(() => {
		handleTimer();

		return () => clearInterval(intervalId.current);
	}, [time]);

	useEffect(() => {
		handleWorkTime();
	}, []);

	function handleTimer() {
		const { dispMinutes, dispSeconds } = setTimerDisplayValue(time);
		setDisplayTime(`${dispMinutes}:${dispSeconds}`);

		intervalId.current = setInterval(() => {
			const { dispMinutes, dispSeconds, remainsTime } = setTimerDisplayValue(
				time - 1
			);
			if (remainsTime >= 0) {
				setTime(remainsTime);
				setDisplayTime(`${dispMinutes}:${dispSeconds}`);
			} else {
				audioRef.current.play();
				setTimeout(() => {
					if (progressDevider === workTime) {
						handleBreakTime();
					} else {
						handleWorkTime();
					}
				}, 1000);
			}
		}, 1000);
	}

	function setTimerDisplayValue(remainsTime) {
		const seconds = remainsTime % 60;
		const dispSeconds = `0${seconds}`.slice(-2);
		const minutes = remainsTime / 60;
		const dispMinutes = `0${Math.floor(minutes)}`.slice(-2);
		return { dispMinutes, dispSeconds, remainsTime };
	}

	function handleWorkTime() {
		setTime(workTime);
		setProgressDevider(workTime);
		setIsBtnClicked(false);
		resetTheTimer();
	}

	function handleBreakTime() {
		setTime(breakTime);
		setProgressDevider(breakTime);
		setIsBtnClicked(false);
		resetTheTimer();
	}

	function resetTheTimer() {
		setTimeout(() => {
			clearInterval(intervalId.current);
		});
	}

	return (
		<div className="w-full h-full flex flex-col justify-center rounded-lg p-4 py-8 bg-primary-brown-100-90 drop-shadow-md">
			<audio src={audio} ref={audioRef} />
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
					className={`btn btn-primary px-4 rounded-full ${
						isBtnClicked ? "disabled" : ""
					}`}
					onClick={() => {
						setIsBtnClicked(true);
						handleTimer();
					}}
				>
					Start
				</button>
				<button
					ref={puaseRef}
					className="btn btn-primary px-4 rounded-full"
					onClick={() => {
						setIsBtnClicked(false);
						clearInterval(intervalId.current);
					}}
				>
					Pause
				</button>
			</div>
		</div>
	);
}

export default Timer;
