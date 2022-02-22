import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyAOmnW7us-adbnIBVkFWs0L1jLCPWq97FI",
      authDomain: "viviana-blog.firebaseapp.com",
      projectId: "viviana-blog",
      storageBucket: "viviana-blog.appspot.com",
      messagingSenderId: "448434741623",
      appId: "1:448434741623:web:0479dbfc3bbb20ac288172",
      measurementId: "G-G6WMHL6WY7"
      };
      
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();

export const saveTask = (title, description, img, date) => { 
    console.log(title, description, img, date)
    addDoc(collection(db, 'blogText'), {title: title, description: description, img: img, date: date});
};

export const getTasks = () =>{ 
    getDocs(collection(db, "blogText")  )
};

export const onGetTasks = (callback) => {
    onSnapshot (collection(db, 'blogText'), callback) 
}

export const deleteTask =   id => deleteDoc(doc (db, 'blogText', id))
