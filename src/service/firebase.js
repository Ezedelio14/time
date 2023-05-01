import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDTttD7wlNoqL0BRrQA8vBcTzk7swixxRY",
  authDomain: "time-319df.firebaseapp.com",
  projectId: "time-319df",
});

const db = getFirestore(firebaseApp);

export const userCollectionRef = collection(db, "users");

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
