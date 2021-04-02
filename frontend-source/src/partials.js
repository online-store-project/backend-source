const adjust_partials = () => {
    $(document).ready(() => {
        adjust_categoriesbar();
        is_user_loggedin((username) => {
            if(username) {
                create_navlink('/online-store/account', 'Omat sivut');
                create_navlink('/online-store/logout', 'Kirjaudu ulos');
                console.log(username);
                //Tähän tulee usernamen lisäys sivulle johonkin kohtaan
            } else {
                create_navlink('/online-store/login', 'Kirjaudu');
                create_navlink('/online-store/registry', 'Rekisteröidy');
            }
        })
    })
}

function is_user_loggedin(result) {
    let cookie_value = document.cookie
        .split('; ')
        .find(row => row.startsWith('username='));
    if(cookie_value) {
        let username = cookie_value.split('=')[1];
        result(username);
    } else result(null);
}
function check_cookie() {

}
function create_navlink(href, text) {
    $('#navbar').append(
        $('<li></li>').addClass('nav-item').append(
            $('<a></a>').addClass('nav-link').attr('href', href).text(text)
        )
    )
}
function adjust_categoriesbar() {
    $('#navbardrop').click(() => {
        $('#categories').slideToggle(200);
    })
}