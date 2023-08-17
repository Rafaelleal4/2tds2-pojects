class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.products = []
    }
}

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService {
    constructor(){
        this.categories = [];
        this.nextCategoryId = 0;
    }
    addCategory(name) {
        const id = this.nextCategoryId++;
        const category = new Category(id, name);
        this.categories.push(category);
    }
}

class ProductsService {
    constructor() {
        this.products = [];
        this.nextProductId = 0;
    }
    addProduct(name, price, category){
        const id = this.nextProductId++;
        const product = new Product(id, name, category);
        category.products.push(product)
        this.products.push(product)
    }
}

const categoryService = new CategoryService()

function creatCategory() {
    const categoryName = "Cenoura";
    
    categoryService.addCategory(categoryName)

    console.log(categoryService.categories)
}