// Joshua Monti
// SDI 1209
// Project 4


//#1
// This is a function check to whether or not given email matches the pattern check.

 function emailValidCheck(email) {
	var eaddress = email;
		var emailPattern = /^[a-zA-Z0-9]+@[gmail]/		
		if (emailPattern.test(eaddress)) {
			console.log("Pattern Accepted");
		
		} else {
			console.log("REJECTED");
	
			
		};
	
	
}; 











// #2
// This check if the givent statement is a Url.

function urlCheck(urlToCheck){
	var url = urlToCheck;
		var urlPattern = /[http][https]/;
		if 	(urlPattern.test(url)) {
			console.log("This is a  Proper Url");
		} else {
			console.log("This is not a  Proper Url");
		}; 
		
			
};

//Problems
//#1
emailValidCheck("salt@gmail.com");

//#2
urlCheck("www.google.com");
