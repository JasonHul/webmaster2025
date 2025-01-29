class Item {

    constructor(item, category, price, pictureURL = '', description) {
        this.item = item; 
        this.category = category;
        this.price = price; 
        this.description = description;
        this.pictureURL = pictureURL; 
    }

    //Method to display item details (for debugging)
    displayDetails() {
        return `Item: ${this.item}, Category: ${this.category}, Price: $${this.price}, Picture: ${this.pictureURL}`;
    }


    generateItem() {
        return `
        <div class="menu-category">
            <img src="${this.pictureURL}" alt="${this.item}">
            <div class="category-content">
                <h3>${this.item}</h3>
                <p>${this.description}</p>
                <p class="price">$${this.price}</p>
                <a href="#" class="btn" data-item="${this.item}" data-price="${this.price}" data-picture="${this.pictureURL}">Order Now</a>
            </div>
        </div>
        `;
    }

}

const Categories = Object.freeze({
   APPETIZERS: 'Appetizers',
   DESSERTS: 'Desserts',
   DRINKS: 'Drinks',
   ENTREES: 'Entrees',
   SPECIALS: 'Specials'
});


 const itemsList = [
   // Appetizers
    new Item('Greek Salad', Categories.APPETIZERS, 5.99, '../images/app_salad.jpg', 'Fresh and crispy rolls filled with vegetables and served with a tangy dipping sauce.'),
    new Item('Tomato and Avacado Toast', Categories.APPETIZERS, 4.99, '../images/avacodo_tomato_toast.jpg', 'Layered with cheese, jalapeños, and a blend of fresh toppings. Perfect for sharing!'),
    new Item('Lettuce Eat Classic Salad', Categories.APPETIZERS, 7.99, '../images/salad_ranch.jpg', 'Spicy and flavorful chicken wings served with ranch or blue cheese dressing.'),
    new Item('Squash Soup', Categories.APPETIZERS, 6.49, 
        '../images/squash_soup.jpg', 
        'Grilled bread topped with a fresh mix of tomatoes, basil, and garlic.'),
    
    new Item('Veggie Pizza', 
        Categories.APPETIZERS,
        8.99,
        '../images/veggiepizza.jpg',
        'Juicy meatballs stuffed with mozzarella and served with marinara sauce.'),


    //Desserts
    new Item('Toffee Ice-cream', Categories.DESSERTS, 4.99, '../images/toffee_icecream.jpg', 'Deliciouso.'),

    //Drinks
    new Item('Coffee Heart Espresso', Categories.DRINKS, 5.49, '../images/coffee_heart.jpg', 'Love your taste :)')

    //Entrees

    //Specials
];

function createItemDisplays(category) {
    try {
        const menuContainer = document.getElementById('menuContainer');
        console.log("menuContainer", menuContainer);

        // Checking if itemsList is defined
        if (typeof itemsList !== 'undefined') {
            itemsList.forEach(item => {
                if (item.category === category) {
                    menuContainer.innerHTML += item.generateItem();
                    console.log(item.displayDetails());
                }
            });
        } else {
            console.error("itemsList is not defined.");
        }
    }
    catch (error) {
        console.log(error);
    }
}