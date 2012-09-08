// where can I buy guild Wars 2?


// Variables


var name = " GW 2";
var nameL = "Monti";
var miles = 10;
var levelArray = [1,2,3,4,5,6,80];
var options = [4,true];



//Procedure

var  totalWait = function(wait, beta) {
	 var years = wait + beta; 
	 
	 console.log(" I waited " + years, "years", "For"  + name);
};





//while Function

	var levelCountDown = function (){
		
		var level = 80;
			
		while (level > 0) {
			console.log(level + " is a level in " + name)
			level = level - 10;
			
			if (level > 0){
				
				
			} else {
				console.log(" 1 is the lowest level in " + name);
			};
			
			};
		
	};
	







// for loop


	
	for ( var miles = 10; miles > 0 ; miles--) {
				
	  console.log( miles + " Miles Left to get to GameStop");
	  	
				
	 
	 };
		console.log("I have arrived at GameStop");
				

		console.log("I grabbed Guild Wars 2 and went purchase it");
		     
 // number function
 
 var change = function(gP, m) {
	 change = ( gP - m);
		return change;
 }; 
	
	console.log(" My Change is " + change(60.73, 100));
	



// bollean

var goodName= true, createdChar= true ;
	if (createdChar && goodName){
	console.log( "Welcome to GW2");
		
	}  else {
		console.log("Try a new name");
	};



// Main Code - Function calls

totalWait(1, 3);
levelCountDown();












 

	