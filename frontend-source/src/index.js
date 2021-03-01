function ajax_testi() {
    $(document).ready(() => {
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8081/api/getcustomers',
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