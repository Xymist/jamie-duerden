function encrypt() {
//    if (window.crypto.getRandomValues) {
//        var key = document.getElementById('pub-key').val;
//        var pub_key = openpgp.key.readArmored(key);
//        var pgp_message = openpgp.encryptMessage(pub_key.keys, $('#main-input').val());
//        $('#main-input').val(pgp_message);
//        $('#encrypt-button').style.display="none";
        $("contact-form").submit();
//        return true;
//    } else {
//        $("#encrypt-button").val("Error");
//        window.alert("This browser isn't supported!");
//        return false;
//    }
}