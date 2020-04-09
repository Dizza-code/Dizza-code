//Js task for HNG
var data = [
    {
      "principal": 2500, 
      "time": 1.8
    }, 
    {
      "principal": 1000,
      "time": 5
    },
    {
      "principal": 3000,
      "time": 5
    },
    {
      "principal": 2000,
      "time": 3
    }
  ];
  
  function interestCalculator(data){
    var interestData = [];
    for (var i = 0; i < data.length; i++){
      var principal = data[i].principal;
      var time = data[i].time;
       var rate;
      var interest;
    
    if(principal >= 2500 && (time > 1 || time < 3) ) {
      rate = 3
    }else if(principal >= 2500 && time >= 3) {
      rate = 4
    }else if(principal < 2500 || time <= 1 ) {
      rate = 2
    }else{
      rate = 1
    }
    interest = (principal * rate * time) / 100;
      interestData.push({
        "principal": principal,
        "time": time,
        "rate": rate,
        interest: interest
      });
    }
   console.log(interestData);
    return interestData;
  }
  interestCalculator(data);
  