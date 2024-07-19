import { initializeApp } from 'firebase/app';

import {getDatabase, ref, get, set, child, update, remove} from "firebase/database";
import { getStorage, uploadBytes,ref as storageRef ,getDownloadURL} from "firebase/storage";
initializeApp({
    apiKey: "AIzaSyCwrvGsEJ5uAaZY82xsuQZCS5XfpDT9ft0",
    authDomain: "school-website-ddd48.firebaseapp.com",
    projectId: "school-website-ddd48",
    storageBucket: "school-website-ddd48.appspot.com",
    messagingSenderId: "1007933429374",
    appId: "1:1007933429374:web:14840411aff249e0786a2f",
    measurementId: "G-55R6D0MHYM"
});
const db = getDatabase();
const storage = getStorage();