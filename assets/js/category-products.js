class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.products = []
    }
}

class Prpducts {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}