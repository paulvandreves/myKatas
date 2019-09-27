// Given two positive intergers do the numbers have the same frequency of digits 
function sameFrequency(a,b){
    // good luck. Add any arguments you deem necessary.
    a = a.toString().split('').sort()
    a = a.reduce(function(prev, curr){
      return (Number(prev) || 0) + (Number(curr) || 0);
  });
  
    
    b = b.toString().split('').sort()
    b = b.reduce(function(prev, curr){
      return (Number(prev) || 0) + (Number(curr) || 0);
  });
    return a === b;  
  }
  // does a given char appear the same amount of times 
  
  // turn the given values into an array 
  
  // Sort the array 
  
  // compare the arrays 