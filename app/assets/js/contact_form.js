function encrypt_if_possible() {
  var openpgp = require('openpgp');
  var key = document.getElementById('pub-key').val();
  var publicKey = openpgp.key.readArmored(key);
  openpgp.encryptMessage(publicKey.keys, $('#main-input').val()).then(function(pgpMessage) {
    $('#main-input').val(pgp_message);
    $("contact-form").submit();
  }).catch(function(error) {
    console.log("Failed to encrypt message; sending in plaintext");
    $("contact-form").submit();
  });
}
