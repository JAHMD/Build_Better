import { nanoid } from "nanoid";
import { createContext, useState } from "react";
import { createPortal } from "react-dom";
import Overlay from "../components/Overlay";
import Note from "../components/notes/Note";
import NoteForm from "../components/notes/NoteForm";
import SectionHeader from "../layouts/SectionHeader";

export const NoteContext = createContext(null);
export const FromContext = createContext(null);

function Notes() {
	const [hasOverlay, setHasOverlay] = useState(false);
	const [note, setNote] = useState({ id: "", title: "", note: "", time: "" });
	const [notes, setNotes] = useState(
		() => JSON.parse(localStorage.getItem("notes")) || []
	);

	function handleOverlay() {
		setNote({ id: "", title: "", note: "", time: "" });
		setHasOverlay((oldState) => !oldState);
	}

	function handleNoteChange({ target }) {
		const feild = target.id;
		const inputValue = target.value;

		if (feild === "note-title") {
			setNote((oldNote) => ({
				...oldNote,
				title: inputValue,
			}));
		} else {
			setNote((oldNote) => ({ ...oldNote, note: inputValue }));
		}
	}

	function handleEditNote(id) {
		const currentNotes = JSON.parse(localStorage.getItem("notes"));
		const [editedNote] = currentNotes.filter((note) => note.id === id);
		setNote({ ...editedNote });
		setHasOverlay((oldState) => !oldState);
	}

	function handleDeleteNote(id) {
		const currentNotes = JSON.parse(localStorage.getItem("notes"));
		const updatedNotes = currentNotes.filter((note) => note.id !== id);
		localStorage.setItem("notes", JSON.stringify(updatedNotes));
		setNotes(updatedNotes);
	}

	function handleSubmitNote(e) {
		e.preventDefault();
		const time = new Date().toLocaleString();

		if (note.note) {
			const updatedNote = note.id ? note : { ...note, id: nanoid(), time };
			handleAddNote(updatedNote);
			setHasOverlay(false);
		}
	}

	function handleAddNote(addedNote) {
		const currentNotes = JSON.parse(localStorage.getItem("notes")) || [];
		const updatedNotes = [
			addedNote,
			...currentNotes.filter((note) => note.id !== addedNote.id),
		];

		localStorage.setItem("notes", JSON.stringify(updatedNotes));
		setNotes(updatedNotes);
	}

	return (
		<section className="section">
			{hasOverlay &&
				createPortal(
					<Overlay>
						<FromContext.Provider
							value={{
								note,
								handleSubmitNote,
								handleOverlay,
								handleNoteChange,
							}}
						>
							<NoteForm />
						</FromContext.Provider>
					</Overlay>,
					document.body
				)}
			<SectionHeader>
				<h2 className="section__heading">Notes</h2>
				<button className="btn btn-primary px-6" onClick={handleOverlay}>
					New note
				</button>
			</SectionHeader>
			<div className="cards-container">
				<NoteContext.Provider value={{ handleDeleteNote, handleEditNote }}>
					{notes.map((note) => (
						<Note key={note.id} note={note} />
					))}
				</NoteContext.Provider>
			</div>
		</section>
	);
}

export default Notes;
