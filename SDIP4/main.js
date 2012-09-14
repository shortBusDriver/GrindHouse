// Joshua Monti
// SDI 1209
// Project 4


//#1
// This is a function check to whether or not given email matches the pattern check.

/* function emailValidCheck(email);{
	var eaddress = email;
		var emailPattern = 	
	
	
} */











// #2
// This check if the givent statement is a Url.

function urlCheck(urlToCheck){
	var url = urlToCheck;
		var urlPattern = /[http][https]/;
		if 	(urlPattern.test(url)) {
			console.log("This is a Url");
		} else {
			console.log("This is not a Url");
		}; 
};

urlCheck("www.google.com")