const route = '../images/';

const get_products = () => {
    $(document).ready(() => {
        $.ajax({
            type: 'POST',
            url: '/api/getproducts',
            cache: false
        }).done((data) => {
            console.log("Haku toteutettu onnistuneesti!");
            do_html_product(data);
        }).fail((error) => {
            console.log("Haku ei valitettavasti onnistunut\nError : " + error);
        }).always(() => {
            console.log("Haku tehty");
        })
    })
}
const do_product_text = (key, text, tag) => {
    let text_elem = $('<p></p>').addClass('product-text').text(key + text + tag);
    return text_elem;
}
const do_product_image = (imageURL, id) => {
    let src = route + imageURL;
    let img = $('<img></img>').attr('src', src).addClass('product-image');
    let a = $('<a></a>').attr('href', '/api/getproduct/?id=' + id).append(img);
    let div = $('<div></div>').addClass('image-div').append(a);
    return div;
}
const do_html_product = (data) => {
    let main_div = document.getElementById('products-up');
    let id = 0;
    
    $.each(data, (index, product) => {
        let text_div = $('<div></div>').addClass('product-info');
        let product_div = $('<div></div>').addClass('product');
        let image_div;

        for(let key in product) {
            switch(key) {
                case 'productID':
                    id = product[key];
                case 'imageURL':
                    image_div = do_product_image(product[key], id);
                    break;
                case 'name':
                    text_div.append(do_product_text("Tuote : ", product[key], ""));
                    break;
                case 'price':
                    text_div.append(do_product_text("Hinta : ", product[key], "$"));
                    break;
                case 'description':
                    text_div.append(do_product_text("Tuotteen kuvaus : ", product[key], ""));
                    break;
                default:
                    break;
            }
            console.log(id);
        }
        image_div.appendTo(product_div);
        text_div.appendTo(product_div);
        product_div.appendTo(main_div);
    })
}