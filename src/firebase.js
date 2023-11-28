// // // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0dQvpSge8Tr3387B18UXy-SVzv0igYDI",
    authDomain: "quiz-app-e27d8.firebaseapp.com	",
    projectId: "quiz-app-e27d8",
    storageBucket: "quiz-app-e27d8.appspot.com",
    messagingSenderId: "1035231693080",
    appId: "1:1035231693080:web:ab9e8eb55b4286875cf66d"
};

// // // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyClNjGNH_5IGMWPueM9mD_7SYlAyn_dwKA",
//   authDomain: "quizadmin-ba9e3.firebaseapp.com",
//   projectId: "quizadmin-ba9e3",
//   storageBucket: "quizadmin-ba9e3.appspot.com",
//   messagingSenderId: "991548138551",
//   appId: "1:991548138551:web:e7652d166ce3952c644bb2"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export default app;
