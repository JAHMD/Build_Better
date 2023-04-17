import { useContext, useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { FromContext } from "../../pages/Notes";

function NoteForm() {
	const { handleSubmitNote, handleOverlay, handleNoteChange, note } =
		useContext(FromContext);
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, [inputRef]);

	return (
		<form className="form" onSubmit={handleSubmitNote}>
			<div className="flex justify-between items-center pb-2 border-b-2 border-primary-black-100/90">
				<p className="font-semibold text-xl">Add new note</p>
				<button type="button" className="text-2xl" onClick={handleOverlay}>
					<MdClose />
				</button>
			</div>
			<label htmlFor="note-title">Title:</label>
			<input
				ref={inputRef}
				className="rounded-lg py-2 px-4"
				type="text"
				id="note-title"
				value={note.title}
				onChange={handleNoteChange}
			/>
			<label htmlFor="note-input">Description:</label>
			<textarea
				className="rounded-lg py-2 px-4"
				id="note-input"
				value={note.note}
				onChange={handleNoteChange}
			/>
			<button className="btn btn-primary mt-2">Submit</button>
		</form>
	);
}

export default NoteForm;
