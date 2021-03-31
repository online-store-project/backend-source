const adjust_accountpage = (user) => {
    $(document).ready(() => {
        for(let value of user) {
            $('#username').attr('placeholder', value.username);
            $('#email').attr('placeholder', value.email);
            $('#firstname').val(value.firstname);
            $('#lastname').val(value.lastname);
        }
    })
}