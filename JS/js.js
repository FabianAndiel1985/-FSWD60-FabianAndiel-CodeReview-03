function size() {alert(window.innerWidth)};



document.getElementById("calcBtn").addEventListener("click", function(){ 
	
	var horse_power  = Number(document.getElementById("userHorsepower").value);
	var age = Number(document.getElementById("userAge").value);
	var country = document.getElementById("userCountry").value;
	calculateInsurancePerCountry(horse_power,age,country);

});


function calculateInsurancePerCountry(horse_power, age, country) {


  var userName = document.getElementById("userName").value;
  if (country == "Austria") {

  	var insurance = Math.floor(  ((horse_power*100)/age)+50 );

  }

  else if (country == "Hungary") {

  	var insurance = Math.floor( ((horse_power*120)/age)+100 );

  }

  else if (country == "Greece") {
  	var insurance = Math.floor( ((horse_power*150)/(age+3))+50 ); 

  }

  var string = userName + ",  your insurance costs " + insurance + " &euro;";

  document.getElementById("result").innerHTML = string;
  

};













































































// document.getElementById("calcBtn").addEventListener("click", function(){
//   var userName = document.getElementById("userName").value;
//   var userAge = Number(document.getElementById("userAge").value);
//   var userHorsepower  = Number  (document.getElementById("userHorsepower").value);
//   var userCountry = document.getElementById("userCountry").value;

//   console.log(userCountry,userAge,userName,userHorsepower);

//   if (userCountry == "Austria") {

//   	var insurance =  ((userHorsepower*100)/userAge)+50; 
//   	alert(insurance);

//   }

//   else if (userCountry == "Hungary") {

//   	var insurance = ((userHorsepower*120)/userAge)+100;
//   	alert(insurance);

//   }

//   else if (userCountry == "Greece") {
//   	var insurance = ((userHorsepower*150)/(userAge+3))+50;
//   	alert(insurance);

//   }

//   document.getElementById("result").innerHTML = insurance;
  
//   document.getElementById("result").setAttribute("visibility", "visible");



// });