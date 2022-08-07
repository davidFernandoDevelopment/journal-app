import {
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider,
    User as UserFirebase,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth';

import { Authenticate } from '../auth';
import { Response, FirebaseAuth } from './';


const googleProvider = new GoogleAuthProvider();



export const signInWithGoogle = async (): Promise<Response> => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        
        const {
            uid,
            email,
            photoURL,
            displayName,
        } = result.user;

        return {
            ok: true,
            result: {
                uid,
                email,
                photoURL,
                displayName
            }
        };

    } catch (error: any) {
        return {
            ok: false,
            result: {
                code: error.code,
                message: error.message
            }
        };
    }
};

export const registerEmailPassword = async ({
    email, password, displayName
}: Authenticate): Promise<Response> => {
    try {
        const res = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid } = res.user;
        await updateProfile(FirebaseAuth.currentUser as UserFirebase, {
            displayName
        });

        return {
            ok: true,
            result: {
                uid,
                email,
                displayName
            }
        };

    } catch (error: any) {
        return {
            ok: false,
            result: {
                code: error.code,
                message: error.message
            }
        };
    }
};

export const signInEmailPassword = async ({
    email, password
}: Authenticate): Promise<Response> => {
    try {
        const res = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = res.user;

        return {
            ok: true,
            result: {
                uid,
                email,
                photoURL,
                displayName
            }
        };

    } catch (error: any) {
        return {
            ok: false,
            result: {
                code: error.code,
                message: error.message
            }
        };
    }
};

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
};