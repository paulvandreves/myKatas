function solution(roman){
    roman = roman.split(''); 
    for(var i = 0; i < roman.length; i ++){
        if(roman[i] === 'M'){
            roman[i] = 1000; 
        }
        if(roman[i] === 'D'){
            roman[i] = 500; 
        }
        if(roman[i] === 'C'){
            roman[i] = 100; 
        }
        if(roman[i] === 'L'){
            roman[i] = 50; 
        }
        if(roman[i] === 'X'){
            roman[i] = 10;
        }
        if(roman[i] === 'V'){
            roman[i] = 5; 
        }
        if(roman[i] === 'I'){
            roman[i] = 1; 
        }
    }
    let h = 1; 
    for(var j = 0; j < roman.length; j ++){
        if(roman[j] < roman[h] ){
            roman[h] -= roman[h]; 
        }
        h ++; 
    }
    return roman.reduce((a, b) => a + b, 0);
}
  

  
   
  
  











  for(var i = 0; i < roman.length; i++){
    for(let prop in object){}
      if(roman [i] === prop){
        console.log("found a Match!"); 
        arabicNum += prop.val;
      }
    }
return arabicNum; 
}
  


solution('IIV');

function solve(arr){
  for(var i = 0; i < arr.length; i ++){
      for(var j = 0; j < arr.length; j ++){
          if(arr[i] + arr[j] === 0){
              arr = arr.slice(j); 
              console.log(arr); 
          }
      }
  }
  return arr; 
};

// Shortest path in a perfect city 
function perfectCity(departure, destination) {
  const a = departure[0]; 
  const b = destination[0]; 
  let xDifference = departure[0] -= destination[0];
  let yDifference = departure[1] -= destination[1];
  if(xDifference < 0){
    xDifference = - xDifference; 
  }
  if(yDifference < 0){
    yDifference = - yDifference; 
  }
  let xDiff = a + b; 
  console.log(xDiff, xDifference)
  if(a < 0.5 && b < 0.5){
    xDifference = xDiff; 
  }
  if(a < .5 && a > 0){
    if(b < 1 && b > .5){
      xDiff = a - 1; 
      xDiff = xDiff + b -1; 
      xDiff = -xDiff; 
      xDifference = xDiff; 
    }  
  }
  let route = yDifference + xDifference; 
  route = route.toFixed(1);  //if interger 
  route = route.toString();
  return route; 
}
