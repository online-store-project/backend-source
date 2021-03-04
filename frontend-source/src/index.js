function ajax_testi() {
    $(document).ready(() => {
        $.ajax({
            type: 'POST',
            url: '/api/getcustomers',
            cache: false
        }).done((data) => {
            console.log("Haku toteutettu onnistuneesti!");
            console.log(data);
        }).fail((error) => {
            console.log("Haku ei valitettavasti onnistunut\nError : " + error);
        }).always(() => {
            console.log("Haku tehty");
        })
    })
}
function getImage() {
    $(document).ready(() => {
        let img = $('<img></img>').attr('src', '../images/chivas_regal.png');
        //img.css({ 'width':'15.25em','height':'15.25em' });
        $('#image-left').append(img);
    })
}
function test() {
    let elem = document.getElementById('products-up');
    elem.scrollIntoView();
}