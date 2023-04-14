import { useContext, useEffect, useRef, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { NoteContext } from "../../pages/Notes";

function Note({ note }) {
	const { handleEditNote, handleDeleteNote } = useContext(NoteContext);
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
		<article className="card justify-between gap-2 h-[186px]">
			<h3 className="note-title">{note.title}</h3>
			<p
				ref={noteRef}
				className="note-content"
				onClick={() => handleEditNote(note.id)}
			>
				{note.note}
				{hasBottomOverlay && (
					<span className="absolute bottom-0 left-0 h-6 w-full bg-gradient-to-t from-primary-brown-100 to-transparent"></span>
				)}
			</p>
			<div className="flex items-center justify-between flex-wrap gap-3 pt-2 border-t border-primary-black-200">
				<span className="inline-block text-xs">{note.time}</span>
				<div className="flex gap-2">
					<button
						className="btn btn-primary text-sm font-semibold px-2"
						onClick={() => handleEditNote(note.id)}
					>
						<MdEdit />
					</button>
					<button
						className="btn btn-primary text-sm font-semibold px-2"
						onClick={() => handleDeleteNote(note.id)}
					>
						<MdDelete />
					</button>
				</div>
			</div>
		</article>
	);
}

export default Note;
