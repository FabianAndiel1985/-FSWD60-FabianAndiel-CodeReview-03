

var calculateInsurancePerCountry = 

function(horse_power, age, country) {

  if (country == "Austria") {

  	var insurance = Math.floor(  ((horse_power*100)/age)+50 );

  }

  else if (country == "Hungary") {

  	var insurance = Math.floor( ((horse_power*120)/age)+100 );

  }

  else if (country == "Greece") {
  	var insurance = Math.floor( ((horse_power*150)/(age+3))+50 ); 

  }

  return insurance;
};