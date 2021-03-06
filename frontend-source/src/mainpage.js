const mainpage_load = (products) => {
    $(document).ready(() => {
        //$('#container').addClass('mainpage-container');

        let products_left = document.getElementById('products-left');
        let products_right = document.getElementById('products-right');
        let check = 0;
        for(let product of products) {
            do_product(product, (err, div) => {
                if ((check % 2) != 0) $(products_right).append(div);
                else                  $(products_left).append(div);
            })
            check++;
        }
    })
}
const do_product = (product, result) => {
    let div = $('<div></div>').addClass('product').append(
        $('<div></div>').addClass('image-div').append(
            $('<a></a>').attr('href', '/online-store/productpage/' + product.productId + '/' + product.name).append(
                $('<img></img>').attr('src', '/images/' + product.imageURL).addClass('product-image')
            )
        ),
        $('<div></div>').addClass('product-info').append(
            $('<p></p>').addClass('product-text').text('Tuote : ' + product.name),
            $('<p></p>').addClass('product-text').text('Hinta : ' + product.price + '$'),
            $('<p></p>').addClass('product-text').text('Tuotteen kuvaus : ' + product.description)
        )
    )
    result(null, div);
}