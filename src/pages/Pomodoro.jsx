import { useState } from "react";
import { createPortal } from "react-dom";
import { HiExclamationCircle } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import pomodoroImg from "../assets/images/Pomodoro.avif";
import Overlay from "../components/Overlay";
import Timer from "../components/pomodoro/Timer";
import SectionHeader from "../layouts/SectionHeader";

function Pomodoro() {
	const [isOverlayOpen, setIsOverlayOpen] = useState(false);

	function handleOvelrayState() {
		setIsOverlayOpen((oldState) => !oldState);
	}

	return (
		<section className="rounded-lg h-full p-4 md:p-6 bg-primary-brown-200-30 shadow-md relative flex flex-col gap-6">
			{isOverlayOpen &&
				createPortal(
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
					</Overlay>,
					document.body
				)}
			<SectionHeader>
				<h2 className="section__heading text-inherit">Pomodoro</h2>
				<button
					className="text-3xl bg-transparent drop-shadow-md"
					onClick={handleOvelrayState}
				>
					<HiExclamationCircle className="text-primary-black-50 bg-primary-brown-95 font-semibold rounded-full transition-colors" />
				</button>
			</SectionHeader>
			<Timer />
		</section>
	);
}

export default Pomodoro;
