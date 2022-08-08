import { doc, collection, setDoc } from 'firebase/firestore/lite';

import {
    Note, AppThunk, setNotes, setSaving, updateNote,
    setActiveNote, addNewEmptyNote, savingNewNote,
    setPhotosToActiveNote
} from '../';
import { FirebaseDB } from '../../firebase';
import { fileUpload, loadNotes } from '../../helpers';


export const startNewNote = (): AppThunk => {
    return async (dispatch, getState) => {
        const { auth } = getState();

        const { uid } = auth.user!;

        const newNote: Note = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: []
        };
        const newDoc = doc(collection(
            FirebaseDB,
            `${uid}/journal/notes`
        ));
        dispatch(savingNewNote());
        await setDoc(newDoc, newNote);
        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    };
};

export const startLoadingNotes = (): AppThunk => {
    return async (dispatch, getState) => {
        const uid = getState().auth.user!.uid;
        const notes = await loadNotes(uid!);

        dispatch(setNotes(notes));
    };
};

export const startSaveNote = (note: Note): AppThunk => {
    return async (dispatch, getState) => {
        dispatch(setSaving());
        const { uid } = getState().auth.user!;
        const { id, ...noteToFirestore } = note;
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${id}`);

        await setDoc(docRef, noteToFirestore, { merge: true });
        dispatch(updateNote(note));
    };
};

export const startUploadFiles = (files: FileList): AppThunk => {
    return async (dispatch) => {
        dispatch(setSaving());
        const fileUploadPromises: Promise<string>[] = [];
        Array.from(files).forEach(file => {
            fileUploadPromises.push(fileUpload(file));
        });
        const photosUrls = await Promise.all(fileUploadPromises);

        dispatch(setPhotosToActiveNote(photosUrls));
    };
};