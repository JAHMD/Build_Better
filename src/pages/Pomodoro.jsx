import { useEffect, useRef, useState } from "react";
import { HiExclamationCircle } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import pomodoroImg from "../assets/images/Pomodoro.avif";
import Overlay from "../components/Overlay";
import ProgressCircle from "../components/pomodoro/ProgressCircle";

function Pomodoro() {
	const [isOverlayOpen, setIsOverlayOpen] = useState(false);
	const [minutes, setMinutes] = useState(1);
	const [time, setTime] = useState(`00:00`);
	const progress = (minutes * 100) / 60;
	const intervalId = useRef(null);

	useEffect(() => {
		intervalId.current = setInterval(() => {
			const seconds = minutes * 60;

			const updatedSeconds = (seconds - 1) % 60;
			const dispSeconds = `0${updatedSeconds}`.slice(-2);

			const updatedMinutes = (seconds - 1) / 60;
			const dispMinutes = `0${Math.trunc(updatedMinutes)}`.slice(-2);
			console.log(updatedSeconds, updatedMinutes);

			setMinutes(updatedMinutes);
			if (updatedMinutes > 1 || updatedSeconds > 0)
				setTime(`${dispMinutes}:${dispSeconds}`);
			else clearInterval(intervalId.current);
		}, 200);

		return () => clearInterval(intervalId.current);
	}, [time, minutes]);

	function handleOvelrayState() {
		setIsOverlayOpen((oldState) => !oldState);
	}

	return (
		<section className="rounded-lg h-full p-4 md:p-6 bg-primary-brown-200-30 shadow-md relative flex flex-col gap-6">
			{isOverlayOpen && (
				<Overlay>
					<div className="relative drop-shadow-md">
						<button
							className="rounded-full absolute -top-2 -right-2 btn bg-primary-pomodoro-300/95 text-primary-brown-95 font-extraboldld text-2xl drop-shadow-md"
							onClick={handleOvelrayState}
						>
							<IoClose />
						</button>
						<img
							src={pomodoroImg}
							alt=""
							loading="lazy"
							className="w-[500px] max-w-full object-cover rounded-xl"
						/>
					</div>
				</Overlay>
			)}
			<div className="flex items-center justify-between bg-primary-pomodoro-300/80 text-primary-brown-95 py-4 px-5 rounded-lg drop-shadow-md">
				<h2 className="section__heading text-inherit">Pomodoro</h2>
				<button
					className="text-3xl bg-transparent drop-shadow-md"
					onClick={handleOvelrayState}
				>
					<HiExclamationCircle className="text-primary-pomodoro-300 bg-primary-brown-95 font-semibold rounded-full transition-colors" />
				</button>
			</div>
			<div className="w-full h-full flex flex-col justify-center rounded-lg p-4 py-8 bg-primary-pomodoro-300/80 drop-shadow-md">
				<div className="btns-container">
					<button
						className="btn pomo-btn-primary px-4 rounded-full duration-200"
						onClick={() => setMinutes(2)}
					>
						Work
					</button>
					<button className="btn pomo-btn-primary px-4 rounded-full duration-200">
						Break
					</button>
				</div>
				<ProgressCircle progress={progress} time={time} />
				<div className="btns-container">
					<button className="btn pomo-btn-primary px-4 rounded-full duration-200">
						Start
					</button>
					<button
						className="btn pomo-btn-primary px-4 rounded-full duration-200"
						onClick={() => clearInterval(intervalId.current)}
					>
						Pause
					</button>
				</div>
			</div>
		</section>
	);
}

export default Pomodoro;
