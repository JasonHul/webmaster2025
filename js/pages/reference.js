class Reference {
    constructor(title, imageURL, altText, width, height) {
        this.title = title;
        this.imageURL = imageURL;
        this.altText = altText;
        // this.width = `${250}px`;
        // this.height = `${300}px`;
    }

    displayDetails() {
        return `Title: ${this.title}, Image URL: ${this.imageURL}, Alt Text: ${this.altText}, Width: ${this.width}, Height: ${this.height}`;
    }

    generateReferenceImageHTML() {
        const srcset = `
            ${this.imageURL}?w=200&h=200 200w, 
            ${this.imageURL}?w=300&h=300 300w, 
            ${this.imageURL}?w=400&h=400 400w
        `;
        return `
            <div class="team-member">
                <img 
                    src="${this.imageURL}?w=200&h=200" 
                    srcset="${srcset}" 
                    sizes="(max-width: 400px) 200px, (max-width: 600px) 300px, 400px"
                    alt="${this.altText}" 
                    loading="lazy"
                    width="200" height="200"
                    style="object-fit: cover;">
                <h3>${this.title}</h3>
            </div>
        `;
    }
    
}

//under the class team members in reference page
const referenceImageList = [
    new Reference("Mediterranean Delight Salad", "images/toWEBP/app_salad.webp", "Mediterranean Delight Salad", 300, 200),
  new Reference("Avocado & Tomato Flatbread Delight", "images/toWEBP/avacado_tomato.webp", "Avocado & Tomato Flatbread Delight", 300, 200),
  new Reference("Avocado Toast", "images/toWEBP/avacodo_tomato_toast.webp", "Avocado Toast", 300, 200),
  new Reference("Vegetarian Sweet Cake", "images/toWEBP/cake_pinkfrost.webp", "Vegetarian Sweet Cake", 300, 200),
  new Reference("Macchiato", "images/toWEBP/coffee_heart.webp", "Macchiato", 300, 200),
  new Reference("Caramel Espresso", "images/toWEBP/coffee_shadow.webp", "Caramel Espresso", 300, 200),
  new Reference("Vegan Sugar Cookies", "images/toWEBP/cookie.webp", "Vegan Sugar Cookies", 300, 200),
  new Reference("Vegetarian Curry", "images/toWEBP/curry_rice.webp", "Vegetarian Curry", 300, 200),
  new Reference("Palak Paneer", "images/toWEBP/curryburry.webp", "Palak Paneer", 300, 200),
  new Reference("Pineapple Juice", "images/toWEBP/juice.webp", "Pineapple Juice", 300, 200),
  new Reference("Cheese Cake", "images/toWEBP/cheesecake.webp", "Cheese Cake", 300, 200),
  new Reference("Lemon Water", "images/toWEBP/lemon_water.webp", "Lemon Water", 300, 200),
  new Reference("Orange Juice", "images/toWEBP/orangejuice_fancy.webp", "Orange Juice", 300, 200),
  new Reference("Tropical Juice", "images/toWEBP/orangejuice.webp", "Tropical Juice", 300, 200),
  new Reference("Greek Salad", "images/toWEBP/salad_ranch.webp", "Greek Salad", 300, 200),
  new Reference("Squash Soup", "images/toWEBP/squash_soup.webp", "Squash Soup", 300, 200),
  new Reference("Irish Tea", "images/toWEBP/teasimple.webp", "Irish Tea", 300, 200),
  new Reference("Avocado & Hummus Toast", "images/toWEBP/toast_yellowstuff.webp", "Avocado & Hummus Toast", 300, 200),
  new Reference("Chocolate Ice Cream", "images/toWEBP/toffee_icecream.webp", "Chocolate Ice Cream", 300, 200),
  new Reference("Grilled Tofu", "images/toWEBP/tofu.webp", "Grilled Tofu", 300, 200),
  new Reference("Vegetarian Pizza", "images/toWEBP/veggiepizza.webp", "Vegetarian Pizza", 300, 200),
  new Reference("Matcha Affogato", "images/toWEBP/veggyicecream.webp", "Matcha Affogato", 300, 200),
  new Reference("Acai Bowl", "images/toWEBP/acai_bowl.webp", "Acai Bowl", 300, 200),
  new Reference("Noodle Pasta", "images/toWEBP/shell_pasta.webp", "Veggie Shell Pasta", 300, 200),
  new Reference("Smoothie", "images/toWEBP/strawberry_smoothie.webp", "Smoothie", 300, 200),
  new Reference("Tomato Surprise", "images/toWEBP/tomato_suprise.webp", "Tomato Surprise", 300, 200),
  new Reference("Veggie Pasta", "images/toWEBP/veg_pasta.webp", "Veggie Pasta", 300, 200),
  new Reference("Veggie Longbread", "images/toWEBP/veg_pizza.webp", "Veggie Longbread", 300, 200),
  new Reference("Veggie Wraps", "images/toWEBP/veggy_wraps.webp", "Veggie Wraps", 300, 200),
  new Reference("Home Hero Picture", "images/toWEBP/homepage_hero.webp", "Veggie Wraps", 300, 200),
  new Reference("Who We Are Picture", "images/toWEBP/whowearepic.webp", "Veggie Wraps", 300, 200),
];


  
function loadReferenceImages() {
    try {
        const referenceContainer = document.getElementById('team-grid');

        if (typeof referenceImageList !== 'undefined') {
            referenceImageList.forEach(image => {
                referenceContainer.innerHTML += image.generateReferenceImageHTML();
                console.log(image.displayDetails());
            });
        }
        else {
            console.error("referenceImageList is not defined.");
        }
    }
    catch (error) {
        console.log(error);
    } 
}


loadReferenceImages();

