//TODO: Add functionality when user logged in to save into database in future
// Firebase configuration (already initialized above)


foodItems = JSON.parse(localStorage.getItem('foodItems')) || [];


function addFoodItem(item, count) {
    
    
    //Adds duplicate quantity and count to the same item while deleting the previous one
    saved_quantity = +checkDuplicates(item) + +count;
    
    const order = { item, saved_quantity };
    foodItems.push(order);
    localStorage.setItem('foodItems', JSON.stringify(foodItems));
    updateCartLabel();
    console.log("foodItems: ", foodItems);
    
}

function checkDuplicates(itemName) {   
    let totalCount = 0;  
    foodItems.some(checkItem => {
        if (checkItem.item === itemName) {
            totalCount = checkItem.saved_quantity;  // Get the existing count for the duplicate item
            console.log("itemName: ", itemName, "count: ", checkItem.saved_quantity);    
            
            // Remove the duplicate item from the array
            foodItems = foodItems.filter(item => item.item !== itemName);
            
            console.log("originally saved count: ", totalCount);
            return true;  // Stop searching once duplicate is found
        }
        return false;
    });

    return totalCount;
}

async function saveToDatabase() {
    try {
        userid = JSON.parse(localStorage.getItem("sessionUser")).userId;
        if (userid !== null) {
            const cartRef = db.collection("cartHistory").doc(userid); // Use userId as the document ID

            await cartRef.set(
                {
                    foodItems,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                },
                { merge: true } // Ensures existing fields are updated instead of replacing the whole document
            );

            console.log("Cart saved/updated successfully! User:", userid);
        } else {
            console.log("Didn't work lol. Userid:", userid);
        }
    } catch (error) {
        console.error("Error saving cart to database:", error);
    }
}



