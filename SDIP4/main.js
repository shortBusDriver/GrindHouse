// Joshua Monti
// SDI 1209
// Project 4


//#1
// This is a function check to whether or not given email matches the pattern check.

 function emailValidCheck(email) {
	var eaddress = email;
		// This checks to make sure Login Email is a Gmail Account.
	var emailPattern = /^[a-zA-Z0-9]+@[gmail]/		
		if (emailPattern.test(eaddress)) {
			console.log("Pattern Accepted");
		
		} else {
			console.log("REJECTED");
	
			
		};
	
	
}; 


// #2
// This check if the givent statement is a Http or Https.

function urlCheck(urlToCheck){
	var url = urlToCheck;
		var urlPattern = /[http]/;
		var httPattern = /[https]$/;
		
		
	if 	(urlPattern.test(url)) {
			console.log("This is a Http");
		} else {
			console.log("This is not a Http");
};	
	if (httPattern.test(url)) {
			console.log("This is a Https");
			
		} else {
			console.log("This is not a Https");
};
		
		
		
		
		
			
};




//Problems
//#1
emailValidCheck("salt@gmail.com");

//#2
urlCheck("https:www.google.com");
