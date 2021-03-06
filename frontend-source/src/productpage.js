const get_product = (product) => {
    for(let property of product) {
        let html = `    
            <div class="image-div">
                <img class="product-image" src="/images/${property.imageURL}">
            </div>
            <div class="product-info">
                <p class="product-text">${property.name}</p>
                <p class="product-text">${property.price}$</p>
                <p class="product-text">${property.description}</p>
                <button type="button" onclick="" class="btn btn-success">Lisää tuote ostoskoriin</button>
            </div>
        `;
        document.getElementById('product').innerHTML += html;
    }
}