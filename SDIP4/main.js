// Joshua Monti
// SDI 1209
// Project 4


// #1
// This is a function check to whether or not given email matches the pattern check.

 function emailValidCheck(email) {
	var eaddress = email;
		// This checks to make sure Login Email is a Gmail Account.
	var emailPattern = /^[a-zA-Z0-9]+@[gmail]/ ;		
		if (emailPattern.test(eaddress)) {
			console.log("Pattern Accepted");
		
		} else {
			console.log("REJECTED");
	
			
		};
	
	
}; 


// #2
// This  function check if the given statement is a Http or Https.

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


// #3
// Finding Different Dates
// My fiance's and I anniversary date to present.

 function getDays(testDate) {
    var dater = testDate;
    today = new Date(2012, 8, 14);
    var one_day = 1000 * 60 * 60 * 24;
    
    console.log(Math.ceil((today.getTime() - dater.getTime()) / (one_day)) + " days have gone by since our wonderful day! " + testDate)
};		
		
			
// #4
// number to string

function stringer(string){
	var count = string;
		console.log(count.toString());
};

	

// #5
// Money!.

function dec(number) { 
	var round = number;
		  console.log("$",round.toFixed(2));
};



// #6








//Problems

//#1
/* emailValidCheck("salt@gmail.com");
emailValidCheck("salt@hotmail.com"); */

//#2
/*
urlCheck("https//:www.google.com");
urlCheck("http//:www.google.com");
urlCheck("google"); */


//#3
/*getDays(new Date(2010, 8 , 23)); */


//#4
stringer(15);

//#5
dec(4.6)

//#6


