import * as firebase from "firebase/app";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDTttD7wlNoqL0BRrQA8vBcTzk7swixxRY",
  authDomain: "time-319df.firebaseapp.com",
  databaseURL: "https://time-319df-default-rtdb.firebaseio.com",
  projectId: "time-319df",
  storageBucket: "time-319df.appspot.com",
  messagingSenderId: "153100075344",
  appId: "1:153100075344:web:94f6cd63c86436c755ec55",
  measurementId: "G-DJN5HZBH6V",
});

export default app;

/*
export const setUsers = async (name, email, password) => {
  await addDoc(userCollectionRef, { name, email, password });
  return getUser(email, password);
};

export const getUser = async (email, password) => {
  const data = await getDocs(userCollectionRef);
  const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  let userId = "";

  users.map((user) => {
    if (email === user.email) userId = user.id;
  });

  return userId;
};
*/
