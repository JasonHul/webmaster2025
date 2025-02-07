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
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error saving message:", error);
    }
  });

  // Utility function to get form field values
  const getElementVal = (id) => document.getElementById(id).value;

  // Fetch data from Firestore
  async function fetchData() {
    try {
      const querySnapshot = await db.collection("contactForm").get();
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      });
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  // fetchData();