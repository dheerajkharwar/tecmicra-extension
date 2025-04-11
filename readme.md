this is put inside the website if we embedd a website in the extension for enabling the sessions:
session_set_cookie_params([
	'secure' => true,
	'httponly' => true,
	'samesite' => 'None'
]);