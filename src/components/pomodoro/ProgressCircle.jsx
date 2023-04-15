import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressCircle = ({ progress, time }) => {
	return (
		<div className="w-44 sm:w-52 my-4 mx-auto flex items-center justify-center p-4 bg-primary-black-50 rounded-full font-bold drop-shadow-md font-sans text-white">
			<CircularProgressbar
				value={progress}
				maxValue={100}
				text={`${time}`}
				styles={buildStyles({
					pathColor: "hsl(175, 7%, 60%)",
					textColor: "hsl(44, 21%, 90%)",
					trailColor: "hsl(44, 21%, 90%)",
				})}
			/>
		</div>
	);
};

export default ProgressCircle;
