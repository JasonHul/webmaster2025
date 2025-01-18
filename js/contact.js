  
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
  document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = getElementVal("name");
    const email = getElementVal("email");
    const subject = getElementVal("subject");
    const message = getElementVal("message");

    try {
      await db.collection("contactForm").add({
        name,
        email,
        subject,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp() // Adds a server-side timestamp
      });
      console.log("Message saved successfully!");
    } catch (error) {
      console.error("Error saving message:", error);
    }
  });

  // Utility function to get form field values
  const getElementVal = (id) => document.getElementById(id).value;

  // Fetch data from Firestore
  // async function fetchData() {
  //   try {
  //     const querySnapshot = await db.collection("contactForm").get();
  //     querySnapshot.forEach((doc) => {
  //       console.log(doc.id, "=>", doc.data());
  //     });
  //   } catch (error) {
  //     console.log("Error fetching data:", error);
  //   }
  // }

  // fetchData();