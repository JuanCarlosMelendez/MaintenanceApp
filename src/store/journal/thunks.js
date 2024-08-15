import { doc, collection, setDoc, deleteDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

export const startNewNote = () => {
    return async ( dispatch, getState ) => {
        dispatch( savingNewNote() );
       
        
        const { uid } = getState().auth;
        // uudi
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        
        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes`) );
        await setDoc( newDoc, newNote );
        
        newNote.id = newDoc.id;
        
        // console.log({newDoc, setDocResp});
        
        //! dispatch
        dispatch( addNewEmptyNote( newNote) );
        dispatch( setActiveNote( newNote) );
        // dispatch( activateNote )
    }
}

export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {
        
        const { uid } = getState().auth;
        if ( !uid ) throw new Error('El UID del usuario no existe');

        const notes = await loadNotes( uid );
        // console.log(notes);

        dispatch( setNotes( notes ) );
    }
}

export const startSaveNote = () => {
    return async ( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        console.log(note.id);
        console.log(uid);

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
        await setDoc( docRef, noteToFireStore, { merge: true });

        dispatch( updateNote( note ) );
    }
}

export const startUploadingFiles = ( files = [] ) => {
    return async ( dispatch ) => {
        dispatch( setSaving() );

        // await fileUpload( files[0]);
        // console.log(files);
        const fileUploadPromises = [];
        for ( const file of files ) {
            fileUploadPromises.push( fileUpload( file ))
        }
        
        const photoUrls = await Promise.all( fileUploadPromises );
        console.log(photoUrls);

        dispatch( setPhotosToActiveNote( photoUrls ));
    }
}

export const startDeletingNotes = () => {
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        // console.log({ uid, note });

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await deleteDoc( docRef );

        dispatch( deleteNoteById(note.id) );
    }
}