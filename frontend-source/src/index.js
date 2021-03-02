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