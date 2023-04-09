import { nanoid } from "nanoid";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import Overlay from "../components/Overlay";
import Note from "../components/notes/Note";
import SectionHeader from "../layouts/SectionHeader";

function Notes() {
	const [hasOverlay, setHasOverlay] = useState(false);
	const [note, setNote] = useState({ id: "", note: "", time: "" });
	const [notes, setNotes] = useState(
		() => JSON.parse(localStorage.getItem("notes")) || []
	);

	function handleNoteChange(e) {
		const inputValue = e.target.value;
		setNote((oldNote) => ({ ...oldNote, note: inputValue }));
	}

	function handleAddNote() {
		setHasOverlay(true);
	}

	function handleSubmitNote(e) {
		const time = new Date().toLocaleTimeString();
		e.preventDefault();
		if (note.note) {
			setNote((oldNote) => ({ ...oldNote, id: nanoid(), time }));
			setHasOverlay(false);
		}
	}

	return (
		<section className="section">
			{hasOverlay && (
				<Overlay>
					<form className="form" onSubmit={handleSubmitNote}>
						<button
							type="button"
							className="absolute top-5 right-5 text-2xl"
							id="new-task"
						>
							<MdClose />
						</button>
						<p></p>
						<label htmlFor="note-input">Your note:</label>
						<input
							className="rounded-lg py-2 px-4"
							type="text"
							id="note-input"
							value={note.note}
							onChange={handleNoteChange}
						/>
						<button className="btn btn-primary mt-2">Submit</button>
					</form>
				</Overlay>
			)}
			<SectionHeader>
				<h2 className="section__heading">Notes</h2>
				<button className="btn btn-primary px-6" onClick={handleAddNote}>
					New note
				</button>
			</SectionHeader>
			<div className="cards-container">
				{notes.map((note) => (
					<Note key={note.id} note={note} />
				))}
			</div>
		</section>
	);
}

export default Notes;
