import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,

} from "firebase/auth";
import {getFirestore,doc,getDoc,setDoc,collection,writeBatch,query,getDocs} from 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyAEQhSvrRea3kc7Pq7rZcti3Sa4Ou7ZEQM",
	authDomain: "small-store-f19e3.firebaseapp.com",
	projectId: "small-store-f19e3",
	storageBucket: "small-store-f19e3.appspot.com",
	messagingSenderId: "938333456883",
	appId: "1:938333456883:web:e366eb59f355336a14aa86",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
		const collectionRef = collection(db,collectionKey);
		const batch = writeBatch(db);

		objectsToAdd.forEach((object) => {
			const docRef = doc(collectionRef,object.title.toLowerCase());
			batch.set(docRef, object);
		});
		await batch.commit();
		console.log('done')

}
export const getStoreAndDocument = async () => {
	const collectionRef = collection(db,'store');
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	const storeMap = querySnapshot.docs.reduce((acc,docSnapshot) => {
		const {title,items} = docSnapshot.data();
		acc[title.toLowerCase()] = items;
		return acc;
	} , {})
	return storeMap;

}


export const createUserDocumentFromAuth = async (userAuth,additionalInformation = {}) => {
    const userDocRef =doc(db,'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);

	if(!userSnapshot.exists()){
		const { displayName,email} = userAuth;
		const createAt = new Date();

		try{
			await setDoc(userDocRef,{
				displayName,
				email,
				createAt,
				...additionalInformation,
			});

		}catch(error){
			console.log('error the user',error.message);
		}
	}
	return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email,password) => {
	if(!email || !password) return;

return await createUserWithEmailAndPassword(auth, email, password);
}
export const sginInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback)