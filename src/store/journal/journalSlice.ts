import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Note } from './';


interface JournalState {
    isSaving: boolean;
    messageSaved: string;
    notes: Note[];
    activeNote: Note | null;
}

const initialState: JournalState = {
    isSaving: false,
    activeNote: null,
    messageSaved: '',
    notes: []
};

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        savingNewNote: (state: JournalState) => {
            state.isSaving = true;
        },
        setSaving: (state: JournalState) => {
            state.messageSaved = '';
            state.isSaving = true;
        },
        addNewEmptyNote: (state: JournalState, action: PayloadAction<Note>) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state: JournalState, action: PayloadAction<Note>) => {
            state.activeNote = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state: JournalState, action: PayloadAction<Note[]>) => {
            state.notes = action.payload;
        },
        updateNote: (state: JournalState, action: PayloadAction<Note>) => {
            state.isSaving = false;
            state.notes = state.notes.map(
                note => note.id === action.payload.id
                    ? action.payload
                    : note
            );
            state.messageSaved = `${action.payload.title} actualizada correctamente`;
        },
        setPhotosToActiveNote: (state: JournalState, action: PayloadAction<string[]>) => {
            state.activeNote!.imageUrls = [
                ...state.activeNote!.imageUrls,
                ...action.payload
            ];
            state.isSaving = false;
        },
        clearNotesLogout: (state: JournalState) => {
            state.isSaving = false;
            state.activeNote = null;
            state.messageSaved = '';
            state.notes = [];
        },
        deleteNoteById: (state: JournalState, action: PayloadAction<string>) => {
            state.notes = state.notes.filter(note => note.id !== action.payload);
            state.activeNote = null;
        }
    }
});


export const {
    setNotes,
    setSaving,
    updateNote,
    savingNewNote,
    setActiveNote,
    deleteNoteById,
    addNewEmptyNote,
    clearNotesLogout,
    setPhotosToActiveNote
} = journalSlice.actions;
export default journalSlice.reducer;