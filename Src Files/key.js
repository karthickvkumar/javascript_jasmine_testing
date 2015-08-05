window.key = {
    inbuilt: function(string) {
        var encodedString = btoa(string);
        var decodedString = atob(encodedString);
        return decodedString;
    },
    aes_static: function(plain_txt, key_value) {
        var encrypted = CryptoJS.AES.encrypt(plain_txt, key_value);
        var decrypted = CryptoJS.AES.decrypt(encrypted, key_value);
        return decrypted

    }
};