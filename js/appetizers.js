// Selecting parent container where menu items will be appended
const menuContainer = document.getElementById('menuContainer');

console.log("menuContainer", menuContainer);

const items = [
    new Item('Spring Rolls', 'Appetizers', 5.99, '../images/app_salad.jpg', 'Fresh and crispy rolls filled with vegetables and served with a tangy dipping sauce.'),
    new Item('Loaded Nachos', 'Appetizers', 4.99, '../images/avacodo_tomato_toast.jpg', 'Layered with cheese, jalapeños, and a blend of fresh toppings. Perfect for sharing!'),
    new Item('Buffalo Wings', 'Appetizers', 7.99, '../images/salad_ranch.jpg', 'Spicy and flavorful chicken wings served with ranch or blue cheese dressing.'),
    new Item('Bruschetta', 'Appetizers', 6.49, 
        '../images/squash_soup.jpg', 
        'Grilled bread topped with a fresh mix of tomatoes, basil, and garlic.'),
    
    new Item('Stuffed Mushrooms', 
        'Appetizers',
        8.99,
        '../images/avacodo_tomato_toast.jpg',
        'Juicy meatballs stuffed with mozzarella and served with marinara sauce.')
];




//Appending items to HTML
items.forEach(item => {
    menuContainer.innerHTML += item.generateItem();
    console.log(item.displayDetails());
});
