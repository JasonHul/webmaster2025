class Item {
    itemsList = [];

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

