const get_products = (products) => {
    let array_left = new Array();
    let array_right = new Array();
    let products_left = document.getElementById('products-left');
    let products_right = document.getElementById('products-right');
    let check = 0;
    
    for(let product of products) {
        if((check % 2) == 0) {
            array_left.push(product);
        } else {
            array_right.push(product);
        }
        check++;
    }
    do_products(array_left, products_left);
    do_products(array_right, products_right);
}
const split_array = (array, div) => {
}
const do_products = (array, div) => {
    for(let product of array) {
        let html = `
            <div class="product">
                <div class="image-div">
                    <a href="/api/productpage/${product.productID}">
                        <img class="product-image" src="/images/${product.imageURL}">
                    </a>
                </div>
                <div class="product-info">
                    <p class="product-text">Tuote : ${product.name}</p>
                    <p class="product-text">Hinta : ${product.price}$</p>
                    <p class="product-text">Tuotteen kuvaus : ${product.description}</p>
                </div>
            </div>
        `;
        div.innerHTML += html;
    }
}