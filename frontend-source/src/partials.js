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
const get_accountpage = () => {
    $(document).ready(
        $.ajax({
            type: "POST",
            url: "/online-store/account",
            cache: false,
        }).done(() => {
            console.log("Loading complete");
        }).fail((error) => {
            console.log(error);
        }).always(() => {
            console.log("Complete")
        })
    )
}