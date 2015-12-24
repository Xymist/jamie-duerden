function encrypt() {
  var openpgp = require('openpgp');

  var key = '-----BEGIN PGP PUBLIC KEY BLOCK-----
  Version: SKS 1.1.5
  Comment: Hostname: pgp.mit.edu

  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
  gtEAn22puQEm4j6/ftecayFBox5QZnuK
  =s3f6
  -----END PGP PUBLIC KEY BLOCK-----';
  var publicKey = openpgp.key.readArmored(key);

  openpgp.encryptMessage(publicKey.keys, $('#main-input').val()).then(function(pgpMessage) {
    $('#main-input').val(pgp_message);
    $("contact-form").submit();
    return true;
  }).catch(function(error) {
    console.log("Failed to encrypt message; sending in plaintext")
    $("contact-form").submit();
  });
}
