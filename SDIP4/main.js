// Joshua Monti
// SDI 1209
// Project 4




var myLibrary = function(){


// #1
// This is a function check to whether or not given email matches the pattern check.

 function emailValidCheck(email) {
	var eaddress = email;
		// This checks to make sure Login Email is a Gmail Account.
	var emailPattern = /^[a-zA-Z0-9]+@[gmail]/ ;		
		if (emailPattern.test(eaddress)) {
			return true;
		
		} else {
			return false;
	
			
};
	
	
}; 


// #2
// This  function check if the given statement is a Http or Https.

 function urlCheck(urlToCheck){
	var url = urlToCheck;
		var urlPattern = /^[http]/;
		var httPattern = /^[https]$/;
		
		
	if 	(urlPattern.test(url)) {
			return true;
		} else {
			return false;
};	
	if (httPattern.test(url)) {
			return true;
			
		} else {
			return false;
};
		
		
};		


// #3
// Finding Different Dates
// My fiance's and I anniversary date to present.

 function getDays(testDate) {
    var dater = testDate;
    today = new Date(2012, 8, 14);
    var one_day = 1000 * 60 * 60 * 24;
    
    return (Math.ceil((today.getTime() - dater.getTime()) / (one_day))  + testDate);
};		
		
			
// #4
// number to string

function stringer(string){
	var count = string;
		return(count.toString());
};

	

// #5
// Money!.

function dec(number) { 
	var round = number;
		  return(round.toFixed(2));
}; 



// #6
//Phone Validation

 function phone(phoneNumber) {
		var phoneRegEx = /^[0-9]{3}[\-]{1}[0-9]{3}[\-]{1}[0-9]{4}$/;
		var	phoneCheck = phoneRegEx.test(phoneNumber);
	return phoneCheck;
};
  
  
  
  
  
  
  
  return {
	 "emailValidCheck" : emailValidCheck,
	 "urlCheck" : urlCheck,
	 "getDays" : getDays,
	 "stringer" : stringer,
	 "dec" : dec,
	 "phone": phone
};


};


var newLib = myLibrary();


//Problems

//#1
console.log(newLib.emailValidCheck("wise@gmail.com"));

//#2

console.log(newLib.urlCheck("http:www.google.com"));


//#3
console.log("Days have gone by:"+ newLib.getDays(new Date(2010, 8 , 23)) + "Since our wonderful day"); 


//#4
console.log(newLib.stringer(10));

//#5
console.log("$",newLib.dec(1.50));

//#6
console.log(newLib.phone("404-4318"));




