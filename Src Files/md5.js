var message = function(string)
{
	 var encrypted = CryptoJS.MD5(string);
     var decrypted = CryptoJS.MD5(encrypted);
     return decrypted
}s