const handleAddProducts = ()=> {
    const productEl = document.getElementById("product")
    const quantityEl = document.getElementById("quantity")
    const product = (productEl.value).toLowerCase()
    const quantity = parseInt(quantityEl.value)

    addToCart(product,quantity)
    displayProducts(product, quantity)
    displayStoreProducts()

    productEl.value = ""
    quantityEl.value = ""
};

const getCart = ()=> {
    let cart = {}

    const savedCart = localStorage.getItem('myCart')
    if(savedCart){
        cart = JSON.parse(savedCart)
    }

    return cart
};

const addToCart = (product, quantity)=> {
    const myCart = getCart()

    if(myCart[product]){
        myCart[product] = myCart[product] + quantity
    }else{
        myCart[product] = quantity
    }

    const cartJSON = JSON.stringify(myCart)
    localStorage.setItem('myCart', cartJSON)
};

const displayProducts = (product, quantity)=> {

    const ul = document.getElementById("products-container")
    const li = document.createElement("li")
    li.innerText = ` ${product} : ${quantity}`
    ul.append(li)
};

const displayStoreProducts = ()=> {
    const ul = document.getElementById("products-container")
    ul.innerHTML = ""

    const myCart = getCart()
    for(const product in myCart){
        const li = document.createElement("li");
        li.innerText = `${product} : ${myCart[product]}`;
        ul.appendChild(li);
    }
};