const verify_registry = () => {
    if(document.getElementById('pwd').value != document.getElementById('confirm_pwd').value) {
        document.getElementById('confirm_pwd').setCustomValidity('Salasanat eivät täsmää');
        return false;
    }
}