const adjust_accountpage = (user, message) => {
    $(document).ready(() => {
        get_userinformation(user);
        if(message != null) {
            print_message(message);
        }
    })
}

const get_userinformation = (user) => {
    for(let value of user) {
        $('#username').attr('placeholder', value.username);
        $('#email').attr('placeholder', value.email);
        $('#firstname').val(value.firstname);
        $('#lastname').val(value.lastname);
    }
}

const print_message = (message) => {
    $('#grid-container').append(
        $('<div></div>').addClass('submit').append(
            $('<p></p>').addClass('message').text(message)
        )
    )
}