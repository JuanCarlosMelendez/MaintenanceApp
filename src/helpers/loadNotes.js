import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async ( uid='' ) => {
    if ( !uid ) throw new Error('El UID del usuario no existe');

    // const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes` );
    const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes` );
    const docs = await getDocs(collectionRef);

    console.log(docs);
    //! para acceder a la data de las notas debemos acceder a la propiedad docs.data que es una funcion para ello usaremos un forEach

    const notes = [];

    docs.forEach( doc => {
        notes.push({ id: doc.id, ...doc.data() });
        // console.log( doc.data() );
    })
    console.log(notes);
    return notes;
}