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

class ProductService {
    constructor() {
        this.products = [];
        this.nextProductId = 0;
    }
    addProduct(name, price, category){
        const id = this.nextProductId++;
        const product = new Product(id, name,price, category);
        category.products.push(product)
        this.products.push(product)
    }
}

const categoryService = new CategoryService()
const productService = new ProductService()

function creatCategory() {
    const categoryName = document.getElementById("categoryName").value;
    console.log(categoryName);
    
    categoryService.addCategory(categoryName)

    console.log(categoryService.categories)

    clearFormFields();
}

function creatProduct() {
    const productName = "Cenouras";
    const productPrice = 7;
    const productCategory = categoryService.categories[0];

    productService.addProduct(productName, productPrice, productCategory);

    console.log(productService.products)
}

function clearFormFields() {
    document.getElementById("categoryName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productsName").value = "";
    document.getElementById("productsCategory").value = "";
}