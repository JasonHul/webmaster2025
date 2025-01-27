// Selecting parent container where menu items will be appended
const menuContainer = document.getElementById('menuContainer');

console.log("menuContainer", menuContainer);



// Checking if itemsList is defined
if (typeof itemsList !== 'undefined') {
    itemsList.forEach(item => {
        if (item.category === 'Appetizers') {
            menuContainer.innerHTML += item.generateItem();
            console.log(item.displayDetails());
        }
    });
} else {
    console.error("itemsList is not defined.");
}
