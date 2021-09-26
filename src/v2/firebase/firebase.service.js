import { firebaseConfig } from "./firebase.config";
import { doc, onSnapshot, getFirestore, arrayUnion, updateDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

let firebaseApp = null;
let cloudFirestore = null;
let serverFbListener = null;

export function initializeFirebase(callback) {
    firebaseApp = initializeApp(firebaseConfig);
    cloudFirestore = getFirestore(firebaseApp);

    subscribeToFirebase(callback);
}

export function subscribeToFirebase(callback) {
    serverFbListener = onSnapshot(
        doc(cloudFirestore, 'products', 'minimalist-entrepreneur'),
        doc => {
            if (doc) {
                callback && callback(doc.data());
            }
        },
        error => {
            throw error;
        }
    );
}

export function unsubscribeFromFirebase() {
    if (serverFbListener) serverFbListener();
}

export async function submitReview(data, callback) {
    const reviewsRef = doc(cloudFirestore, 'products', 'minimalist-entrepreneur');

    await updateDoc(reviewsRef, {
        reviews: arrayUnion(data)
    });

    if (callback) {
        callback();
    }
}