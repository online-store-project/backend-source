const adjust_partials = () => {
    $(document).ready(() => {
        adjust_categoriesbar();
        check_cookie((username) => {
            if(username) {
                create_navlink('/online-store/account', 'Omat sivut');
                create_navlink('/online-store/logout', 'Kirjaudu ulos');
                create_username(username);
                
            } else {
                create_navlink('/online-store/login', 'Kirjaudu');
                create_navlink('/online-store/registry', 'Rekisteröidy');
            }
        })
    })
}
function check_cookie(result) {
    let cookie_value = document.cookie
        .split('; ')
        .find(row => row.startsWith('username='));
    if(cookie_value) {
        let username = cookie_value.split('=')[1];
        result(username);
    } else result(null);
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
function create_username(username) {
    $('<p></p>').addClass('username').text(username).insertBefore('#shop-name');
}