const mainpage_load = (products) => {
    $(document).ready(() => {
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
    })
}
const do_products = (array, div) => {
    for(let product of array) {
        $(div).append(
            $('<div></div>').addClass('product').append(
                $('<div></div>').addClass('image-div').append(
                    $('<a></a>').attr('href', '/online-store/productpage/' + product.productId + '/' + product.name).append(
                        $('<img></img>').attr('src', '/images/' + product.imageURL).addClass('product-image')
                    )
                ),
                $('<div></div>').addClass('product-info').append(
                    $('<p></p>').addClass('product-text').text('Tuote : ' + product.name),
                    $('<p></p>').addClass('product-text').text('Hinta : ' + product.price),
                    $('<p></p>').addClass('product-text').text('Tuotteen kuvaus : ' + product.description)
                )
            )
        )
    }
}
