// const API_URl = "https://dummyjson.com/products";
// const productList = document.querySelector(".productList");
// const inp = document.getElementById("inp");
// const btn = document.getElementById("btn");
// const msg = document.querySelector(".msg");
// const sortSelect = document.getElementById("sortSelect");

// let products = [];
// let filterProducts = [];


// async function fetchProducts(){
//     let res = await fetch(API_URl);
//     console.log(res);
//     let data = await res.json();
//     console.log(data);
//     console.log(data.products);
//     products= [...data.products];
//     displayProducts(products)
// }

// fetchProducts();

// function displayProducts(products){
//     productList.innerHTML="";
//     msg.innerText="";
//     if(products.length==0){
//         msg.innerText="Products Not found"
//     }else{
        
//         for(let product of products){
//             // console.log(product);

//             const div = document.createElement("div");
//             div.classList.add("card");
//             const str = `<img src=${product.images[0]}>
//                 <p class="category">${product.category}</p>
//                 <h2>${product.title}</h2>
//                 <p class="desc">${product.description}</p>
//                 <p class="price">$ ${product.price}</p>
//                 <p class="rating">⭐${product.rating}</p>`
//             div.innerHTML=str;

//             productList.appendChild(div);  
//         }
//     }
// }

// btn.addEventListener("click",searchProduct);

// async function searchProduct(){
//     if(inp.value!=""){
//         let serachValue = inp.value.trim();
//         const URL = "https://dummyjson.com/products/search?q="
//         console.log(serachValue)
//         const apiLink = URL+serachValue;
//         inp.value="";
//         let res = await fetch(apiLink);
//         let data = await res.json();
//         console.log(data.products);
//         products= data.products;
//         displayProducts(products);
//     }else{

//     }
// }

// sortSelect.addEventListener("change",sortproduct);

// function sortproduct(){
//     filterProducts=[...products];

//     console.log(sortSelect.value);

//     if(sortSelect.value=="price-high"){
//         filterProducts.sort((a,b)=>b.price-a.price)
//     }else if(sortSelect.value=="price-low"){
//         filterProducts.sort((a,b)=>a.price-b.price)
//     }else if(sortSelect.value=="rating-high"){
//         filterProducts.sort((a,b)=>b.rating-a.rating)
//     }else if(sortSelect.value=="rating-low"){
//         filterProducts.sort((a,b)=>a.rating-b.rating)
//     }else if(sortSelect.value=="sort"){
//         filterProducts=[...products];
//     }

//     displayProducts(filterProducts)

// }


const API_URL = "https://dummyjson.com/products";

const productList = document.querySelector(".productList");
const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const msg = document.querySelector(".msg");
const sortSelect = document.getElementById("sortSelect");

let products = [];
let allProducts = [];


// ---------------- FETCH PRODUCTS ----------------

async function fetchProducts() {

    let res = await fetch(API_URL);
    let data = await res.json();

    allProducts = [...data.products];
    products = [...allProducts];

    displayProducts(products);
}

fetchProducts();


// ---------------- DISPLAY PRODUCTS ----------------

function displayProducts(products) {

    productList.innerHTML = "";
    msg.innerText = "";

    if (products.length === 0) {

        msg.innerText = "Products Not found";

        return;
    }

    for (let product of products) {

        const div = document.createElement("div");

        div.classList.add("card");

        const str = `
            <img src="${product.images[0]}">

            <p class="category">${product.category}</p>

            <h2>${product.title}</h2>

            <p class="desc">${product.description}</p>

            <p class="price">$ ${product.price}</p>

            <p class="rating">⭐ ${product.rating}</p>
        `;

        div.innerHTML = str;

        productList.appendChild(div);
    }
}


// ---------------- SEARCH ----------------

btn.addEventListener("click", searchProduct);

async function searchProduct() {

    let searchValue = inp.value.trim();

    if (searchValue === "") {

        products = [...allProducts];

        displayProducts(products);

        return;
    }

    const URL = "https://dummyjson.com/products/search?q=";
    const viv=URL+searchValue;
    console.log("Searching:", searchValue);
    console.log("URL:", URL);

    let res = await fetch(viv);

    let data = await res.json();

    console.log(data);

    products = data.products;

    displayProducts(products);

    inp.value = "";
}


// ---------------- SORT ----------------

sortSelect.addEventListener("change", sortProduct);

function sortProduct() {

    let filterProducts = [...products];

    console.log(sortSelect.value);

    if (sortSelect.value === "price-high") {

        filterProducts.sort((a, b) => b.price - a.price);

    } else if (sortSelect.value === "price-low") {

        filterProducts.sort((a, b) => a.price - b.price);

    } else if (sortSelect.value === "rating-high") {

        filterProducts.sort((a, b) => b.rating - a.rating);

    } else if (sortSelect.value === "rating-low") {

        filterProducts.sort((a, b) => a.rating - b.rating);

    }

    displayProducts(filterProducts);
}
