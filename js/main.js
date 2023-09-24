
let bag = document.getElementById("bag");
let bagContenedor = document.getElementById("bagContenedor");
let carritoComprar = document.getElementById("carritoComprar");
let container = document.getElementById("container");  

let cart = [];

 

const traerDatos = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    data.forEach((libreria) => {
        const item = document.createElement("div");
        item.className = "cardStyle";
        item.innerHTML = `
        <img src="${libreria.image}">
        <h3>${libreria.title}</h3>
        <p> $ ${libreria.price}</p>
        
        `;

        container.append(item);
       


       const agregar = document.createElement("button");
        agregar.innerText = `agregar al carrito`
        
        ;
        agregar.className = "btnEstilo";

        item.append(agregar);

        agregar.addEventListener("click", () =>{
           cart.push({
            id: libreria.id,
            nombre: libreria.title,
            price: libreria.price,
            img: libreria.image,



           });  
           console.log(cart);
        });


        
    })
};

traerDatos(); 
 



bag.addEventListener("click", () =>{
const itemAgregados = document.createElement("div");
itemAgregados.className = "itemStilos"
itemAgregados.innerHTML = `<h1>Cart</h1>


`;
bagContenedor.append(itemAgregados);

const bagButton = document.createElement("p");
bagButton.innerText = "Delete";
bagButton.className = "bagButtonStyle";

itemAgregados.append(bagButton);

cart.forEach((product) =>{
    let carritoContenedor = document.createElement("div");
    carritoContenedor.className = "carritoComprarStyle";
    carritoContenedor.innerHTML = `
    <img src="${product.img}" >
    <h3>${product.nombre}</h3>
    <p> $ ${product.price}</p>
        `;
        bagContenedor.append(carritoContenedor)
    })

        const total = cart.reduce((acc , that) => acc + that.price, 0);

        const totalCart = document.createElement("div");
        totalCart.className = "totalCartStyle";
        totalCart.innerHTML = `<p> Buy ${total} $`;

        bagContenedor.append(totalCart);
});
