let products = [
    {
        name:'basketBall',
        image: "basketball.jpg",
        price: 5,
        rating:"⭐⭐⭐⭐⭐",
        overprice:8
    },
    {
        name:'Nike Airforce',
        image: "airforcenike.jpg",
        price: 25,
        rating:"⭐⭐⭐⭐",
        overprice:37.99
    },
    {
        name:'hORDAN',
        image: "jordan.jpg",
        price: 25,
        rating:"⭐⭐⭐⭐",
        overprice:37.99
    },
    
    
];

           
let productsHTML = `  `
  products.forEach((product)=>{
    productsHTML +=` 
   
            <div class="product-container">
                <div class="produt-card-header">
                    <img class="product-image" src="images/${product.image}">
                </div>
                <div class="product-card-body">
                    <h4 class="product-name">${product.name}</h4>
                    <p class="rating">${product.rating}</p>
                    <p class="product-price">$${product.price} <span class="over-price">$${product.overprice}</span></p>
                    
                </div>
                <div class="quantitySelection">
                    <select class="select">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="1">5</option>
                        <option value="1">6</option>
                        <option value="1">7</option>
                        <option value="1">8</option>
                        <option value="1">9</option>
                        <option value="1">10</option>
                    </select>
                </div>
                <div class="add_button">
                    <button class="btn btn-primary">Add</button>
                </div>
           
`

    

})
document.querySelector('.js-produts-grid').innerHTML += productsHTML 



