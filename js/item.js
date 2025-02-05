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
    new Item('Garden Fresh Greek Salad', Categories.APPETIZERS, 6.49, '../images/app_salad.jpg', 'A crisp and refreshing Greek salad with juicy tomatoes, cucumbers, Kalamata olives, and feta, drizzled with herb-infused olive oil.'),
    new Item('Avocado & Tomato Nectar Toast', Categories.APPETIZERS, 5.99, '../images/avacodo_tomato_toast.jpg', 'Creamy avocado, sun-ripened tomatoes, and a hint of citrus on rustic toasted bread, finished with a drizzle of golden honey.'),
    new Item('Nectar House Salad', Categories.APPETIZERS, 7.99, '../images/salad_ranch.jpg', 'A classic crisp salad with fresh greens, crunchy veggies, and your choice of creamy ranch or citrus vinaigrette.'),
    new Item('Garden Fresh Veggie Wraps', Categories.APPETIZERS, 7.99, '../images/veggy_wraps.jpg', 'Light and refreshing veggie wraps filled with crunchy greens, avocado, and a touch of zesty dressing.'),
    new Item('Golden Harvest Squash Soup', Categories.APPETIZERS, 6.99, '../images/squash_soup.jpg', 'A velvety, rich squash soup infused with warm spices and a drizzle of honeyed cream.'),
    new Item('Rustic Veggie Flatbread', Categories.APPETIZERS, 8.99, '../images/veggiepizza.jpg', 'A crispy, artisan flatbread topped with roasted vegetables, fresh basil, and a hint of truffle oil.'),

    //Desserts
    new Item('Toffee Swirl', Categories.DESSERTS, 5.49, '../images/toffee_icecream.jpg', 'A luscious toffee-infused ice cream with golden caramel ribbons and a hint of honeyed crunch.'),
    new Item('Rosé Velvet Cake', Categories.DESSERTS, 6.49, '../images/cake_pinkfrost.jpg', 'A dreamy pink-frosted cake with delicate vanilla layers, kissed with a touch of floral nectar.'),
    new Item('Honeyed Silk Cheesecake', Categories.DESSERTS, 6.99, '../images/cheesecake.jpg', 'A creamy, velvety cheesecake with a golden honey drizzle and buttery graham crust.'),
    new Item('Nectar Blossom Cookie', Categories.DESSERTS, 3.99, '../images/cookie.jpg', 'A soft, chewy cookie infused with warm honey, vanilla, and caramelized toffee bits.'),
    new Item('Garden Nectar Ice Cream', Categories.DESSERTS, 5.99, '../images/veggyicecream.jpg', 'A silky-smooth plant-based ice cream infused with garden-fresh flavors and a touch of golden honey.'),

    //Drinks
    new Item('Honeyed Espresso Bliss', Categories.DRINKS, 5.49, '../images/coffee_heart.jpg', 'A bold espresso kissed with a hint of natural sweetness—pure liquid gold.'),
    new Item('Dark Nectar Espresso', Categories.DRINKS, 5.49, '../images/coffee_shadow.jpg', 'A deep, smoky espresso with a silky finish, rich as midnight nectar.'),
    new Item('Citrus Bloom Infusion', Categories.DRINKS, 3.99, '../images/lemon_water.jpg', 'Crystal-clear water infused with sun-ripened lemons for a bright, floral touch.'),
    new Item('Golden Grove Orange Juice', Categories.DRINKS, 5.49, '../images/orangejuice.jpg', 'Freshly squeezed oranges, bursting with orchard-fresh sweetness and sunshine.'),
    new Item('Amber Sunset Elixir', Categories.DRINKS, 6.49, '../images/orangejuice_fancy.jpg', 'A refined citrus blend with notes of wild honey and a touch of floral nectar.'),
    new Item('Meadow Serenity Tea', Categories.DRINKS, 4.49, '../images/teasimple.jpg', 'A calming herbal tea steeped with delicate botanicals and golden honey essence.'),
    new Item('Chilled Pineapple Juice', Categories.DRINKS, 3.49, '../images/juice.jpg', 'A sweet and savory pineapple juice chilled with ice and infused with a honey drizzle.'),

    
    //Entrees
    new Item('Golden Curry Bliss', Categories.ENTREES, 10.99, '../images/curry_rice.jpg', 'A fragrant golden curry served over fluffy rice, infused with warm spices and a touch of honeyed coconut.'),
    new Item('Spiced Nectar Curry', Categories.ENTREES, 11.49, '../images/curryburry.jpg', 'A rich, velvety curry bursting with bold spices, slow-simmered for deep, aromatic flavor.'),
    new Item('Harvest Bowl Salad', Categories.ENTREES, 9.99, '../images/meal_salad.jpg', 'A vibrant salad packed with crisp greens, roasted nuts, and a drizzle of citrus nectar dressing.'),
    new Item('Amber Harvest Pasta', Categories.ENTREES, 12.49, '../images/shell_pasta.jpg', 'Delicate shell pasta tossed in a creamy roasted butternut sauce, topped with fresh herbs and parmesan.'),
    new Item('Sun-Kissed Tomato Surprise', Categories.ENTREES, 10.99, '../images/tomato_suprise.jpg', 'Juicy, sun-ripened tomatoes seasoned with a flavorful medley of grains, herbs, and a hint of golden honey.'),
    new Item('Garden Herb Pasta', Categories.ENTREES, 11.99, '../images/veg_pasta.jpg', 'A vibrant veggie pasta tossed with fresh basil, roasted garlic, and a touch of citrus zest.'),

    
    //Specials
    new Item('Berry Bliss Açaí Bowl', Categories.SPECIALS, 7.99, '../images/acai_bowl.jpg', 'A nourishing açaí bowl topped with fresh berries, granola, and a drizzle of wild honey.'),
    new Item('Strawberry Nectar Smoothie', Categories.SPECIALS, 6.49, '../images/strawberry_smoothie.jpg', 'A creamy, refreshing smoothie blended with ripe strawberries, banana, and a touch of floral honey.'),
    new Item('Golden Sunrise Toast', Categories.SPECIALS, 5.99, '../images/toast_yellowstuff.jpg', 'Crispy artisan toast topped with a luscious golden spread, avacado, fresh fruit, and a drizzle of raw honey.'),
    new Item('Garden Harvest Longbread', Categories.SPECIALS, 9.99, '../images/veg_pizza.jpg', 'A wood-fired vegetable pizza topped with farm-fresh ingredients and a hint of herb-infused nectar.'),
    new Item('Avocado Nectar Delight', Categories.SPECIALS, 6.99, '../images/avacado_tomato.jpg', 'Creamy avocado and sun-ripened tomatoes served on rustic tortilla with a side of juicy tomatos.'),


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