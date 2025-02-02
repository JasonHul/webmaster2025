// const firebaseConfig = {
  //   apiKey: "AIzaSyCLnWMQFQelUfRT1AMw_ynbUqPm-fBLdy4",
  //   authDomain: "webmaster25-d336f.firebaseapp.com",
  //   databaseURL: "https://webmaster25-d336f-default-rtdb.firebaseio.com",
  //   projectId: "webmaster25-d336f",
  //   storageBucket: "webmaster25-d336f.firebasestorage.app",
  //   messagingSenderId: "592082921682",
  //   appId: "1:592082921682:web:ce8c62ffb626640713650b"
  // };

  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  
  //reference your database
  // var contactFormDB = firebase.database().ref("contactForm");

  // document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  // function submitForm(e) {
  //   e.preventDefault();
  //   var name = getElementVal("name");
  //   var email = getElementVal("email");
  //   var subject = getElementVal("subject");
  //   var message = getElementVal("message");
  //   saveMessages(name, email, subject, message);

  //   console.log(name, email, subject, message);

  // }

  // const saveMessages = (name, email, subject, message) => {
  //   var newContactForm = contactFormDB.push();
    
  //   newContactForm.set({
  //       name : name,
  //       email : email,
  //       subject : subject,
  //       message : message,

  //   });
  // };

  // const getElementVal = (id) => {
  //   return document.getElementById(id).value;
  // };