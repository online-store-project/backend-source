const adjust_partials = () => {
    $(document).ready(() => {
        $('#navbardrop').click(() => {
            $('#categories').slideToggle(200);
        })
    })
}
const check_username = () => {
    let now = new Date();
    if(localStorage.getItem('user')) {
        let username = JSON.parse(localStorage.getItem('user'));
        if(now.getTime() > username.expiry) localStorage.removeItem('user')
        else {
            console.log(user.username);
        }
    }
}
const own_pages = (token) => {
    $(document).ready(
        $.ajax({
            type: "POST",
            url: "/online-store/account",
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    )
}