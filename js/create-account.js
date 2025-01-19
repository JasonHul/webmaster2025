  
  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCLnWMQFQelUfRT1AMw_ynbUqPm-fBLdy4",
    authDomain: "webmaster25-d336f.firebaseapp.com",
    databaseURL: "https://webmaster25-d336f-default-rtdb.firebaseio.com",
    projectId: "webmaster25-d336f",
    storageBucket: "webmaster25-d336f.appspot.com",
    messagingSenderId: "592082921682",
    appId: "1:592082921682:web:ce8c62ffb626640713650b"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Initialize Firestore
  const db = firebase.firestore();

  // Form submission handler
  document.getElementById("accountForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = getElementVal("username");
    const email = getElementVal("email");
    const password = getElementVal("password");
    const confirm_password = getElementVal("confirm-password");

    try {
        if (password != confirm_password) {
            alert("Passwords do not match!");
            return;
        }
        await db.collection("accountForm").add({
            username,
            email,
            password,
            timestamp: firebase.firestore.FieldValue.serverTimestamp() // Adds a server-side timestamp
        });
        console.log("Message saved successfully!");
    } 
    catch (error) {
        console.error("Error saving message:", error);
    }
  });

  // Utility function to get form field values
  const getElementVal = (id) => document.getElementById(id).value;

//   // Fetch data from Firestore
//   async function fetchData() {
//     try {
//       const querySnapshot = await db.collection("contactForm").get();
//       querySnapshot.forEach((doc) => {
//         console.log(doc.id, "=>", doc.data());
//       });
//     } catch (error) {
//       console.log("Error fetching data:", error);
//     }
//   }

//   // fetchData();