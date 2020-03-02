import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.analytics();

export async function loginUser(email: string, password: string){
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return true;
  }
  catch(error) {
    console.log(error);
    return false;
  }
}

// export const auth = firebase.auth();
// export const db = firebase.database();