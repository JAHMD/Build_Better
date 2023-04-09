import { useEffect, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";

function Note({ note }) {
	const noteRef = useRef(null);
	const [hasBottomOverlay, setHasBottomOverlay] = useState(false);

	useEffect(() => {
		setHasBottomOverlay(false);
		const paragraphHeight = noteRef.current?.getBoundingClientRect().height;
		if (paragraphHeight > 103) {
			setHasBottomOverlay(true);
		}
	}, [noteRef]);

	return (
		<article className="card justify-between h-[186px]">
			<p ref={noteRef} className="note-content">
				{note.note}
				{hasBottomOverlay && (
					<span className="absolute bottom-0 left-0 h-6 w-full bg-gradient-to-t from-primary-brown-100 to-transparent"></span>
				)}
			</p>
			<div className="flex items-center justify-between flex-wrap gap-3 pt-2 border-t border-primary-black-200">
				<span className="inline-block text-xs">{note.time}</span>
				<button className="btn btn-primary text-sm font-semibold">
					<MdEdit />
				</button>
			</div>
		</article>
	);
}

export default Note;
