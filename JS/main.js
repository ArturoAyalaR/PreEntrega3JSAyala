
// LISTA DE PRODUCTOS
const products = [
    {
        name: "Frankie",
        price: 55,
        beerStyle: "Stout",
        abv: "5.7%",
        img: "../assets/images/Frankie.jpg"
    },
    {
        name: "Mostro",
        price: 65,
        beerStyle: "IPA",
        abv: "5.7%",
        img: "../assets/images/Mostro.JPG"
    },
    {
        name: "The Ripper",
        price: 60,
        beerStyle: "English Strong Ale",
        abv: "5.7%",
        img: "../assets/images/Ripper.JPG"
    },

];

//GALERIA DE PRODUTOS


//control de HTMl- DOM
const prodtuctList = document.getElementById("prodtuctList");
const seeCart = document.getElementById("seeCart");
const modalContainer = document.getElementById("modalContainer");
const quantityCart = document.getElementById("quantityCart");

let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

//Agregado de productos al carrito
products.forEach((prod) => {
    let content = document.createElement("div")
    content.className = "gallery-products"
    content.innerHTML = `
    <img src="${prod.img}">
    <h4>${prod.name}</h4>
    <p class="price">$ ${prod.price}</p>
    `;

    prodtuctList.append(content);

    let addtoCart = document.createElement("button");
    addtoCart.innerText = " Add to cart ";
    addtoCart.className = "shop-btn bx-cart"

    content.append(addtoCart);

    addtoCart.addEventListener("click", () => {
        const repeat = cart.some((repeatProduct) => repeatProduct.id === prod.id);

        if (repeat) {
            cart.map((product) => {
                if (product.id === prod.id) {
                    product.quantity++;
                }
            });
        } else {
            cart.push({
                id: prod.id,
                img: prod.img,
                name: prod.name,
                price: prod.price,
                quantity: prod.quantity,
            });
        }
        console.log(cart);
        cartCounter();
        saveLocal();
    });
});

//Almacenamiento/storage de la seleccion
const saveLocal = () => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
};

